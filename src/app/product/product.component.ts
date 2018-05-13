import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../share/product.service';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.products = this.productService.getProducts()
  }
}