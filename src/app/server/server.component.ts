import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .styleClass {
        background-color: #adadad;
      }
    `,
  ],
})
export class ServerComponent {
  name = 'my-angular-app';
  btnDisable = false;
  status = false;
  available = 'offline';

  constructor() {
    this.status = Math.random() > 0.5 ? true : false;
    this.available = this.status ? 'offline' : 'online';
  }

  onClickButton() {
    this.status = !this.status;
    this.available = this.status ? 'offline' : 'online';
    console.log(this.status);
  }
  getColor() {
    return this.status === true ? 'red' : 'green';
  }
}
