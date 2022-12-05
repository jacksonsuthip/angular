import { Component } from '@angular/core';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent {
  uName = ''
  city = ''
  address = ''
  gen = ''
  onChangeName(event) {
    this.uName = event.target.value
  }
  onClickCity(event) {
    this.city = event.target.value
  }
  onChangeAddress(event) {
    this.address = event.target.value
  }
  onClickGen(event) {
    if (event.target.id === 'genM') {
      this.gen = 'male'
    } else if (event.target.id === 'genF') {
      this.gen = 'female'
    } else {
      this.gen = 'other'
    }
  }
}
