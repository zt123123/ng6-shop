import { FormGroup, FormControl } from '@angular/forms';

export function mobileValidator(control: FormControl): any {
  let myreg = /^1[0-9]{10}$/
  let valid = myreg.test(control.value)
  return valid ? null : { mobile: true }
}

export function equalValidator(group: FormGroup): any {
  let password: FormControl = group.get("password") as FormControl
  let pconfirm: FormControl = group.get("pconfirm") as FormControl
  let valid: boolean = password.value === pconfirm.value
  console.log(valid);
  return valid ? null : { equal: true }
}