import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { ProductService, Product, Comment } from '../share/product.service';
import { WebsocketService } from '../share/websocket.service';

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

  isWatched: boolean = false;
  currentBid: number;

  constructor(
    public routeInfo: ActivatedRoute,
    public productService: ProductService,
    public wsService: WebsocketService
  ) {

  }

  ngOnInit() {
    let productId: number = this.routeInfo.snapshot.params['productId']
    this.productService.getProduct(productId).subscribe(products => {
      this.product = products
      this.currentBid = products.price
    })

    this.productService.getCommentsForProductId(productId)
      .subscribe(comments => {
        this.comments = comments["data"];
      })
  }
  addComment() {

    if (this.newComment != "") {



      let comment = new Comment(0, this.product.id, new Date, "someone", this.newRating, this.newComment);
      this.productService.addCommentsForProductId(comment).subscribe(products => {
        console.log(products);
      })

      this.comments.unshift(comment);
      this.newComment = "";
      this.newRating = 5;
      this.isCommentHidden = true;
      this.calcAvgStar(comment);
    }
  }

  calcAvgStar(comment) {
    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0)
    this.product.rating = sum / this.comments.length;
  }

  watchProduct() {
    this.isWatched = !this.isWatched
    this.wsService.createObservableSocket("ws://localhost:8085", this.product.id)
      .subscribe(products => {
        let product = products.find(p => p.productId == this.product.id)
        this.currentBid = product.bid;
      })
  }
}
