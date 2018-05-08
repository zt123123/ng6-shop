import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    new Product(1, "第一个商品", 23, 4, "第一个商品，商品描述", ["电子产品", "生活用品", "图书影音"]),
    new Product(2, "第二个商品", 50, 1, "第二个商品，商品描述", ["电子产品", "家居装饰", "图书影音"]),
    new Product(3, "第三个商品", 123, 4, "第三个商品，商品描述", ["家用电器", "家居装饰", "家居装饰"]),
    new Product(4, "第四个商品", 200, 3, "第四个商品，商品描述", ["电子产品", "生活用品", "图书影音"]),
    new Product(5, "第五商品", 199, 2, "第五商品，商品描述", ["家居装饰", "家用电器", "图书影音"]),
    new Product(6, "第六个商品", 100, 1, "第六个商品，商品描述", ["家用电器", "生活用品", "图书影音"]),
  ]

  private comments: Comment[] = [
    new Comment(1, 2, new Date, "aaa", 2, "一般啊，整体还好"),
    new Comment(2, 3, new Date, "zzz", 3, "外卖很快，还不错"),
    new Comment(3, 1, new Date, "ddd", 4, "味道有点淡"),
    new Comment(4, 2, new Date, "aaa", 5, "一般吧，还不错"),
    new Comment(5, 4, new Date, "ccc", 3, "还不错，很好"),
    new Comment(6, 2, new Date, "aaa", 1, "下次还来这个店子，还不错"),
  ]
  constructor() { }

  getProducts() {
    return this.products
  }

  getProduct(id: number) {
    return this.products.find(item => item.id == id)
  }
  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((item: Comment) => item.productId == id)
  }
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