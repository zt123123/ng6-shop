import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLSearchParams } from 'url';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  searchEvent: EventEmitter<ProductSearchParams> = new EventEmitter()

  constructor(private http: HttpClient) { }

  getAllCategories(): string[] {
    return ["电子产品", "生活用品", "图书影音"]
  }
  getProducts(): Observable<Product[]> {
    console.log("getProducts");
    
    return this.http.get<Product[]>("http://localhost:8000/products")
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8000/products/${id}`)
  }
  getCommentsForProductId(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`http://localhost:8000/comments/${id}`)
  }

  search(params: ProductSearchParams): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:8000/products?title=${params.title}&price=${params.price}&category=${params.category}`)
  }
}

export class ProductSearchParams {
  constructor(
    public title: string,
    public price: number,
    public category: string
  ) { }
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: Date,
    public user: string,
    public rating: number,
    public content: string,
  ) { }
}