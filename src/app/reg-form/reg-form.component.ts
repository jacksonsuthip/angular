import { Component } from '@angular/core';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css'],
})
export class RegFormComponent {
  color = true;
  devices = {
    name: '',
    good: { Look: false, Cost: false, Performance: false },
    brand: '',
    color: 'Grey',
  };
  allDevices = [];

  onChangeField(e) {
    if (e.target.name === 'color') {
      this.color = false;
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
    this.devices = {
      name: '',
      good: { Look: false, Cost: false, Performance: false },
      brand: '',
      color: 'Grey',
    };
    this.color = true;
    console.log(this.allDevices);
  }

  removeItem(index) {
    this.allDevices = this.allDevices.filter((_row, i) => i !== index);
  }

  editItem(index) {
    let temp = this.allDevices.filter((_row, i) => i === index);
    this.devices = temp[0];
  }
}
