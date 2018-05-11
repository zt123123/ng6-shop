import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor() {
    this.say();
  }
  say() {
    let a: number = 1;
    let arr: number[] = [1, 2, 3]
    let arr3: Array<string> = [""];
    enum Color {
      RED = "#f00",
      GREEN = "#0f0",
      BLUE = "#00f"
    }
    let color: Color = Color.GREEN;
    // console.log(color);

    let is = [];
    const isA: string = '456'

    function name(params: number, b: number = 1): void {
      console.log(b);
    }
    // name(1);
  }
}

class Person {
  _name: string;
  age: number;
  hobby: object;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.hobby = {
      name: "xxxaaa",
      age: 23
    };
  }
  say() {
    console.log(this.name);
  }
  set name(name: string) {
    this._name = name;
  }
  get name(): string {
    return this._name;
  }
}
let p = new Person("a", 23);
// console.log(p);
// console.log(p.say());
// console.log(p._name);
// console.log(p._name="123");
// console.log(p._name);

// console.log(p.hobby['name']);
// p.hobby['name']=123;
// console.log(p.hobby['name']);
// console.log(p.hobby['age']);


