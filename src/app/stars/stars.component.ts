import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {
  @Input()
  rating: number = 0
  @Input()
  readonly: boolean = true;

  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter();

  stars: boolean[];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.stars = [];
    for (let index = 1; index <= 5; index++) {
      this.stars.push(index > this.rating);
    }
  }
  
  clickStar(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }
  }
}
