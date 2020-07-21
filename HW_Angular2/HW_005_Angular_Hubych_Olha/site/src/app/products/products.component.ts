import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/classProduct';
import { Router } from '@angular/router';
import { ProductService } from '../shared/product.servise';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private router: Router,
    private phraseService: ProductService) { }

  ngOnInit(): void {
    this.phraseService.getProducts().subscribe(result => this.products = result);
  }
  onSelect(productItem: Product) {
    this.router.navigate(["products", productItem.id]);
  }

}
