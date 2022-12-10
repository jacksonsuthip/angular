import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-coustom-add',
  templateUrl: './coustom-add.component.html',
})
export class CoustomAddComponent {
  /**
   * onAddDeviceCoustom is given by the parent component
   * Output is for send data
   *
   * (eg): We can use object of data also to send
   * onAddDeviceCoustom = new EventEmitter<{ key1 : value1, key2 : value2 }>();
   * in onAddDevice function
   * this.onAddDeviceCoustom.emit({ key1 : this.----, key2 : this.+++++ })
   */
  @Output() onAddDeviceCoustom = new EventEmitter<string>();

  /**
   * emit is used to set value to the function
   */
  onAddDevice(device: HTMLInputElement) {
    this.onAddDeviceCoustom.emit(device.value);
  }
}
