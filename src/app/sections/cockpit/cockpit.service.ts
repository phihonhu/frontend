import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CockpitService {

    constructor(private http: Http) { }

    getStreams(apiQuery: string): Observable<any> {
        return this.http.get(apiQuery, this.getHeader())
            .map(response => response.json());
    }

    private getHeader() {
        let headers = new Headers({'Authorization': 'Bearer fake-jwt-token'});
        return new RequestOptions({headers: headers});
    }

}
