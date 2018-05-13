import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../share/product.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  dataSource: Observable<any>
  products: Array<any> = [];
  keyword: string;
  titleFilter: FormControl = new FormControl();

  constructor(private http: HttpClient, private productService: ProductService) {
    this.titleFilter.valueChanges
      .subscribe(val => this.keyword = val)

    // this.dataSource = this.http.get("/products")
    //   .map(res => res.json())
    //   .subscribe(data => {
    //     data ? this.products = data : null
    //   })


  }

  ngOnInit() {
    this.products = this.productService.getProducts()
  }

}