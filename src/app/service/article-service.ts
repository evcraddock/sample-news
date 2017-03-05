import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IArticle } from '../models/index';

@Injectable()
export class ArticleService {

    // TODO: Move to configuration file
    private serverUrl = 'http://localhost:9000';
    constructor(private http: Http) {}

    getArticles(): Observable<IArticle[]> {
        return this.http.get(this.serverUrl + '/articles').map((response: Response) => {
            return <IArticle[]>response.json();
        }).catch(this.handleError);
    }

    getArticle(id: string): Observable<IArticle> {
        return this.http.get(this.serverUrl + '/articles/' + id).map((response: Response) => {
            return <IArticle>response.json();
        }).catch(this.handleError);
    }

    searchArticles(params?: URLSearchParams): Observable<IArticle[]> {
        return this.http.get(this.serverUrl + '/articles', { search: params }).map((response: Response) => {
            return <IArticle[]>response.json();
        }).catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
