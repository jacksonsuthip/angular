import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-coustom-add',
  templateUrl: './coustom-add.component.html',
})
export class CoustomAddComponent {
  /**
   * onAddColorCoustom is given by the parent component
   * Output is for send data
   *
   * (eg): We can use object of data also to send
   * onAddColorCoustom = new EventEmitter<{ key1 : value1, key2 : value2 }>();
   * in onAddColor function
   * this.onAddColorCoustom.emit({ key1 : this.----, key2 : this.+++++ })
   */
  @Output() onAddColorCoustom = new EventEmitter<string>();

  /**
   * emit is used to set value to the function
   */
  onAddColor(color: HTMLInputElement) {
    this.onAddColorCoustom.emit(color.value);
  }
}
