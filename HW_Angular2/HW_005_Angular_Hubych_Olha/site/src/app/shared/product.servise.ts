import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Product } from './classProduct';
import { Observable } from 'rxjs';

import { map } from "rxjs/operators"

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.http.get(environment.apiUrl + "products").pipe(
            map(response => {
                console.log(response);
                let value = response as Product[];
                return value;
            })
        )
    }

    getProduct(productId): Observable<Product> {
        return this.http.get(`${environment.apiUrl + "products"}/${productId}`)
            .pipe(
                map(response => {
                    console.log(response);
                    let value = response as Product;
                    return value;
                })
            );
    }

}