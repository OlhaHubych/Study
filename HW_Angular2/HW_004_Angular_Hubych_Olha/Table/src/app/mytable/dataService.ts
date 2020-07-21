import { DATAS } from './dataProducts';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    getData() {
        const datas = DATAS;
        return datas;
    }
}