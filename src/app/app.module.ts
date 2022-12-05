import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { RegFormComponent } from './reg-form/reg-form.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    RegFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
