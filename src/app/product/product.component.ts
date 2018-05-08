import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../share/product.service';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product[];
  private keyword: string;
  private titleFilter: FormControl = new FormControl();

  constructor(private productService: ProductService) {
    this.titleFilter.valueChanges
      .subscribe(val => this.keyword = val)
  }

  ngOnInit() {
    this.products = this.productService.getProducts()
  }

}