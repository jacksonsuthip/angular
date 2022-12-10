import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapulation',
  templateUrl: './encapulation.component.html',
  styleUrls: ['./encapulation.component.css'],
  encapsulation: ViewEncapsulation.None, // the style will be public
})
export class EncapulationComponent {
  @Input() selectedValue: string = '';

  getColor() {
    return this.selectedValue;
  }
}
