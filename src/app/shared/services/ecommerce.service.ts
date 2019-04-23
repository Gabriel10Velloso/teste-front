import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { Ecommerce } from '../model/ecommerce.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, switchMap, throttle, catchError, tap, retry, mergeMap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class EcommerceService {
    // tslint:disable-next-line:variable-name
    base_url = 'http://ecommerce.com/api/ecommerces/';

    constructor(private http: HttpClient) { }

    /** GET Ecommerce from the server */
    getEcommerces(): Observable<Ecommerce[]> {
        return this.http.get<Ecommerce[]>(this.base_url);
    }

    /** POST Ecommerce from the server */
    createEcommerce(ecommerce: Ecommerce): Observable<Ecommerce> {
        return this.http.post<Ecommerce>(this.base_url, ecommerce, httpOptions)
        .pipe(
            map(res => {
                return res;
            }),
            catchError(err => {
                    // console.log('caught mapping error and rethrowing', err);
                    return throwError(err);
                }),
            );

    }

    /** PUT Ecommerce from the server */
    updateEcommerce(update) {
        console.log(update);
        return this.http.put(this.base_url, update);
    }

    /** DELET Ecommerce from the server */
    deleteEcommerce(ecommerceId) {
        return this.http.delete(this.base_url + ecommerceId);
    }
}
