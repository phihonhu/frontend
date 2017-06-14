import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions, Headers } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

// Import types
import { Tile } from 'pixie';

function getTileMockData(): Tile[]
{
    let myTiles: Tile[] = new Array();

    for (let i=0; i<1000; i++) {
    myTiles.push({ "title": "Dokument" + i, "image": "/assets/angular-logo.svg" } as Tile);
    }

    return myTiles;
};

function parseUrlParams (url_params_string: string) {
    return JSON.parse('{"' + decodeURI(url_params_string).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
}

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {

    // configure fake backend
    backend.connections.subscribe((connection: MockConnection) => {
        // wrap in timeout to simulate server api call
        setTimeout(() => {

            let url = connection.request.url.split('?')[0];

            // Fake backend calls
            if (url.endsWith('/api/tiles') && connection.request.method === RequestMethod.Get) {

                let url_params = parseUrlParams(connection.request.url.split('?')[1]);    
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {

                    console.log("///////////////////////////////////////////");
                    console.log("/// fetching data for archive service");
                    console.log("/// page: " + url_params.page);
                    console.log("/// per_page: " + url_params.per_page);

                    let from_index = (url_params.page - 1) * url_params.per_page;
                    let to_index = url_params.page * url_params.per_page;

                    console.log("/// from_index: " + from_index + " - to_index: " + to_index);

                    let myTiles = getTileMockData().slice(from_index, to_index);

                    // paging headers
                    let linkHeaders: Headers = new Headers();
                    let firstPage = '</api/tiles?page=1&per_page=' + url_params.per_page + '>; rel="first"';
                    let prevPage = '';
                    if (url_params.page > 1) {
                        prevPage = ', </api/tiles?page=' + (Number(url_params.page) - 1) + '&per_page=' + url_params.per_page + '>; rel="prev"';
                    }
                    let nextPage = '';
                    if (url_params.per_page * url_params.page < getTileMockData().length) {
                        nextPage = ', </api/tiles?page=' + (Number(url_params.page) + 1) + '&per_page=' + url_params.per_page + '>; rel="next"';
                    }
                    linkHeaders.append('link', firstPage + prevPage + nextPage);

                    // Send response
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: myTiles, headers: linkHeaders })));
                } else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                }

                return;
            }

            // pass through any requests not handled above
            let realHttp = new Http(realBackend, options);
            let requestOptions = new RequestOptions({
                method: connection.request.method,
                headers: connection.request.headers,
                body: connection.request.getBody(),
                url: connection.request.url,
                withCredentials: connection.request.withCredentials,
                responseType: connection.request.responseType
            });
            realHttp.request(connection.request.url, requestOptions)
                .subscribe((response: Response) => {
                    connection.mockRespond(response);
                },
                (error: any) => {
                    connection.mockError(error);
                });

        }, 500);

    });

    return new Http(backend, options);
};

export let FakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions, XHRBackend]
};