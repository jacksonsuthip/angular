import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  link: { address: string; title: string }[] = [
    { address: 'demo', title: 'Demo' },
    { address: 'reg-form', title: 'Reg Form' },
    { address: 'custom', title: 'Custom component' },
    { address: 'weather', title: 'Weather app' },
    { address: 'form-reactive', title: 'Reactive Form' },
  ];
}
