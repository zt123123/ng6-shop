import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    return this.http.get<Product[]>("http://localhost:8000/products")
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8000/products/${id}`)
  }
  getCommentsForProductId(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`http://localhost:8000/comments/${id}`)
  }

  search(paramsObj: ProductSearchParams): Observable<Product[]> {
    let params = new HttpParams()
      .set("title", paramsObj.title)
      .set("price", paramsObj.price)
      .set("category", paramsObj.category)
    return this.http.get<Product[]>("http://localhost:8000/products",{params})
  }
}

export class ProductSearchParams {
  constructor(
    public title: string,
    public price: string,
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