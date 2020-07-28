import { Component, OnInit } from '@angular/core';
import { GetRequestImagesService } from '../../shared/get-request-images.service'
import { PhotosFilterService } from '../../shared/photos-filter.service'
@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {
  items;
  allGallaryImages
  search: string;
  constructor(
    private serviceHTTP: GetRequestImagesService,
    private imageFilterService: PhotosFilterService) { }

  ngOnInit(): void {
    //делаем запрос через сервис HttpClient
    /*this.http.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
    .subscribe(response => { // subscribe - подписываемся на обзервабл объект. response - тут ожидаем ответ
      console.log(response);
      this.items = response; //ангуляр сам распарсивает
    }) */


    this.serviceHTTP.takeImages()
    .subscribe(response => { // subscribe - подписываемся на обзервабл объект. response - тут ожидаем ответ
        this.allGallaryImages = response;
        this.items = response;
     })
  }

  filterImgs() {
    this.items = this.imageFilterService.imagesFilter(this.allGallaryImages, this.search);
  }

  addImgAngTitle(post) {
    const newObj = {
      title: post.titleText,
      url: post.urlImage
    };
    this.allGallaryImages.unshift(newObj);
  }
}
