import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { FormReactiveService } from './form-reactive.service';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css'],
})
export class FormReactiveComponent implements OnInit {
  company = ['HP', 'DELL', 'LENOVO'];
  allDevices: any = [
    {
      deviceName: 'sfds',
      brand: '',
      color: '',
    },
  ];
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

  // FormBuilder to provide group and fields
  constructor(
    private formBuilder: FormBuilder,
    private formService: FormReactiveService
  ) {}

  ngOnInit(): void {
    // this.onGet();
    // console.log(this.formService.name);
  }

  registrationForm = this.formBuilder.group({
    deviceName: ['HP', [Validators.required, Validators.minLength(3)]],
    brand: ['select', this.selectCheck],
    color: [''],
    address: this.formBuilder.group({
      city: [''],
      state: [''],
      postalCode: [''],
    }),
    // alternateInput
    alternateInputName: this.formBuilder.array([]),
  });

  // method for add alternateInput
  get alternateInput() {
    return this.registrationForm.get('alternateInputName') as FormArray;
  }
  addAlternateinput() {
    this.alternateInput.push(this.formBuilder.control(''));
  }

  selectCheck(control: FormControl) {
    if (control.value === 'any') {
      return { validBrand: true };
    } else {
      return null;
    }
  }

  onSubmit() {
    this.onGet();
    console.log(this.registrationForm.value);
    this.formService
      .onAddDevice({
        Name: this.registrationForm.value.deviceName,
        Brand: this.registrationForm.value.brand,
        Color: this.registrationForm.value.color,
      })
      .subscribe((response) => {
        console.log(response);
        // to call get api using onGet method
      });
  }

  onGet() {
    this.formService
      .onGetAllDevices()
      // .pipe(
      //   catchError((error: any, caught: Observable<any>): Observable<any> => {
      //     console.log('There was an error!', error);
      //     // after handling error, return a new observable
      //     // that doesn't emit any values and completes
      //     return of();
      //   })
      // )
      .subscribe((data: any) => {
        data.forEach((element: { id: any; title: any; userId: any }) => {
          this.allDevices.push({
            deviceName: element.userId,
            brand: element.id,
            color: element.title,
          });
        });
      });
  }

  onEdit(value: number) {
    // patchValue to update formBuilder group
    this.registrationForm.patchValue({
      deviceName: 'dell',
      brand: 'HP',
      color: 'black',
    });
  }
}
