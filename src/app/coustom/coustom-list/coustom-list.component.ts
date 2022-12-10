import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-coustom-list',
  templateUrl: './coustom-list.component.html',
})
export class CoustomListComponent {
  /**
   * itemList is the name given in the parent component
   * Input is used to get it (host by parent component)
   */
  @Input() itemList: string[] = [];

  //////////-------for Encapulation study-----------//////////
  @Output() getName = new EventEmitter<string>();
  onNameClick(item: string) {
    this.getName.emit(item);
  }
}
