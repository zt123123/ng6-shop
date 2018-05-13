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
  isCommentHidden: boolean = true;
  newRating: number;
  newComment: string;

  constructor(
    public routeInfo: ActivatedRoute,
    public productService: ProductService
  ) {

  }

  ngOnInit() {
    let productId: number = this.routeInfo.snapshot.params['productId']
    this.productService.getProduct(productId).subscribe(products => {
      this.product = products
    })

    this.productService.getCommentsForProductId(productId).subscribe(comments => {
      this.comments = comments
    })
  }
  addComment() {
    let comment = new Comment(0, this.product.id, new Date, "someone", this.newRating, this.newComment);
    this.comments.unshift(comment);
    this.newComment = "";
    this.newRating = 5;
    this.isCommentHidden = true;
    this.calcAvgStar(comment);
  }

  calcAvgStar(comment) {
    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0)
    this.product.rating = sum / this.comments.length;
  }
}
