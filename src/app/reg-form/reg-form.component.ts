import { Component } from '@angular/core';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css'],
})
export class RegFormComponent {
  devices = {
    name: '',
    good: {},
    brand: '',
    color: '',
  };
  allDevices = [];

  onChangeField(e) {
    if (e.target.name === 'color') {
      this.devices = { ...this.devices, [e.target.name]: e.target.id };
    } else if (e.target.name === 'good') {
      this.devices = {
        ...this.devices,
        good: {
          ...this.devices.good,
          [e.target.id]: e.target.checked,
        },
      };
    } else {
      this.devices = { ...this.devices, [e.target.name]: e.target.value };
    }
  }

  onAdd() {
    this.allDevices.push(this.devices);
    console.log(this.allDevices);
  }
}
