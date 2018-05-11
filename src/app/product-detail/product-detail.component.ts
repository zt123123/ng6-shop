import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { ProductService, Product, Comment } from '../share/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  comments: Comment[];

  newRating: number;
  newComment: string;

  constructor(
    public routeInfo: ActivatedRoute,
    public productService: ProductService
  ) {

  }

  ngOnInit() {
    let productId: number = this.routeInfo.snapshot.params['productId']
    this.product = this.productService.getProduct(productId)
    this.comments = this.productService.getCommentsForProductId(productId)
  }
  addComment() {
    let comment = new Comment(0, this.product.id, new Date, "someone", this.newRating, this.newComment);
    this.comments.unshift(comment);
  }
}
