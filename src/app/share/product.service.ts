import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  searchEvent: EventEmitter<ProductSearchParams> = new EventEmitter()

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<any[]> {
    return this.http.get<string[]>("http://localhost:8000/categories")
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
  addCommentsForProductId(comment: any): Observable<any> {
    return this.http.post(
      "http://localhost:8000/comments/",
      comment
    )
  }

  page(page: string): Observable<Product[]> {
    let params = new HttpParams({ fromObject: { _page: page, _limit: "10" } })

    return this.http.get<Product[]>("http://localhost:8000/products", { params })
  }

  search(paramsObj: ProductSearchParams): Observable<Product[]> {
    let object = {}
    for (const item of Object.keys(paramsObj)) {
      if (paramsObj[item]) {
        object[item] = paramsObj[item];
      }
    }
    if (object["category"] == -1) {
      delete object["category"];
    }

    let params = new HttpParams({ fromObject: object })


    return this.http.get<Product[]>("http://localhost:8000/products", { params })
  }
}

export class ProductSearchParams {
  constructor(
    public title: string,
    public price: string,
    public category: string
  ) { }
}

export class Category {
  constructor(
    public id: number,
    public name: string,
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