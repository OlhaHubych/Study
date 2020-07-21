import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosFilterService {

  constructor() { }
  imagesFilter(arrayImg: any[], searchStr: string) {
    return arrayImg.filter(obj => {
      console.log(searchStr);
      return obj.title.toLowerCase().includes(searchStr.toLocaleLowerCase());
    })
  }
}
