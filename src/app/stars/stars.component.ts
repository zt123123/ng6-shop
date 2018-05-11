import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input()
  rating: number = 0
  @Input()
  readonly: boolean = true;

  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter();

  stars: boolean[];

  constructor() { }

  ngOnInit() {
    this.stars = [];
    for (let index = 1; index <= 5; index++) {
      this.stars.push(index > this.rating);
    }
    // this.stars = [false, false, true, true, true]
  }
  clickStar(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;
      this.ngOnInit();
      this.ratingChange.emit(this.rating);
    }
  }
}
