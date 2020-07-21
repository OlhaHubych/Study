import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../shared/product.servise';
import { Product } from '../shared/classProduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: ProductService) { }

  ngOnInit(): void {
    console.log(this.activatedRoute);
        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params["id"]; // конвертируем значение параметра id в тип number
            console.log(params);
            this.service
                .getProduct(id)  // обращаемся к сервису и запрашиваем фразу по id. Получаем Observable<Product>
                .subscribe(result => this.product = result);  // как только получаем событие от потока присваиваем его значение свойству phrase
        });
  }

  goToProductList() {
    this.router.navigate(["products"]); // перенаправляем пользователя на ProductListComponent
}
}
