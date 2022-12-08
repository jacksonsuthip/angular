import { Component } from '@angular/core';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css'],
})
export class RegFormComponent {
  /**
   * Setting initial value for all devices
   * buttonStatus for (add or update) class update
   */
  devices = {
    name: '',
    good: { Look: false, Cost: false, Performance: false },
    brand: '',
    color: '',
  };
  allDevices = [];
  buttonStatus = true;
  editIndex = 0;

  /**
   * @param e getting the event
   * setting key value for device
   */
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
  /**
   * push the value in device to alldevice
   */
  onAdd() {
    this.allDevices.push(this.devices);
    this.onReset();
    console.log(this.allDevices);
  }
  /**
   * @param index delete button function
   */
  removeItem(index) {
    this.allDevices = this.allDevices.filter((_row, i) => i !== index);
  }
  /**
   * @param index edit button function
   */
  getEditItem(index) {
    let temp = this.allDevices.filter((_row, i) => i === index);
    this.devices = temp[0];
    this.buttonStatus = false;
    this.editIndex = index;
  }

  onEdit() {
    this.buttonStatus = true;
    this.allDevices.splice(this.editIndex, 1, this.devices);
    this.onReset();
  }

  onReset() {
    this.devices = {
      name: '',
      good: { Look: false, Cost: false, Performance: false },
      brand: '',
      color: '',
    };
  }
}
