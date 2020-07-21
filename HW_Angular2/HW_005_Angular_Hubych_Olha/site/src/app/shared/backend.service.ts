import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { products } from './products'


// Для создания fake backend
// 1) npm install --save angular-in-memory-web-api
// 2) добавить в imports AppModule строку InMemoryWebApiModule.forRoot(BackendService)
// 3) добавить код, который будет использовать fake backend по адресу /api/products 

@Injectable({
    providedIn: 'root'
})
export class BackendService implements InMemoryDbService {

    constructor() { }
        createDb() {
            return { products }
        }
}