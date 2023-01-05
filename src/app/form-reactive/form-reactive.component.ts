import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css'],
})
export class FormReactiveComponent {
  // registrationForm = new FormGroup({
  //   userName: new FormControl('anto'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl(''),
  //   }),
  // });

  constructor(private formBuilder: FormBuilder) {}
  registrationForm = this.formBuilder.group({
    userName: ['cloudcadi', [Validators.required, Validators.minLength(3)]],
    password: [''],
    confirmPassword: [''],
    address: this.formBuilder.group({
      city: [''],
      state: [''],
      postalCode: [''],
    }),
  });
}
