import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Tile } from 'pixie';

@Injectable()
export class ArchiveService {

    private possiblePagingLinkTypes = ['first', 'next', 'prev'];

    constructor(private http: Http) { }

    // queryString in the format of: /api/tiles?page=1&per_page=100
    getTiles(apiUrlWithQuery: string): Observable<any> {

        return this.http.get(apiUrlWithQuery, this.getHeaders())
            .map((response: Response) => {
                return {'body': response.json(), 'link': this.extractPagingLinks(response.headers.get('link'))};
        });
    }

    // private helper methods
    private getHeaders() {
        let headers = new Headers({ 'Authorization': 'Bearer fake-jwt-token'});
        return new RequestOptions({ headers: headers });
    }

    private extractPagingLinks(pagingLinkHeader: string) {

        let pagingLinkResult = {};

        for (let pagingLink of pagingLinkHeader.split(",")) {
            for (let pagingLinkType of this.possiblePagingLinkTypes) {
                if (pagingLink.endsWith('rel="' + pagingLinkType + '"')) {
                    pagingLinkResult[pagingLinkType] = this.extractUrlFromPagingLink(pagingLink);
                    break;
                }
            }
        }
        
        return pagingLinkResult;
    }

    private extractUrlFromPagingLink(pagingLink: string) {
        pagingLink = pagingLink.trim();
        return pagingLink.substr(1, (pagingLink.indexOf('>') - 1));
    }
}