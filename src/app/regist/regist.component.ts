import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { mobileValidator, equalValidator } from '../validator/validator';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {
  formModel: FormGroup;



  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', mobileValidator],
      passwordsGroup: fb.group({
        password: [''],
        pconfirm: [''],
      }, equalValidator)
    })
  }

  ngOnInit() {

  }
  onSubmit() {
    let isUsername = this.formModel.get("username").valid
    let isPhone = this.formModel.get("mobile").valid
    let isPassword = this.formModel.get("mobile").valid
    let isPconfirm = this.formModel.get("mobile").valid

    let errors = this.formModel.get("username").errors

    console.log(isUsername);
    console.log(isPhone);
    console.log(isPassword);
    console.log(isPconfirm);
    console.log(errors);
    console.log(this.formModel.value);
  }
}
