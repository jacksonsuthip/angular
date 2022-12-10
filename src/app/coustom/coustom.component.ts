import { Component } from '@angular/core';

@Component({
  selector: 'coustom',
  templateUrl: './coustom.component.html',
})
export class coustomComponent {
  CoustomItemList: string[] = [];

  addDevice(e: string) {
    this.CoustomItemList.push(e);
  }

  // for Encapulation study
  value: string = '';
  onGetName(e: string) {
    this.value = e;
  }
}
