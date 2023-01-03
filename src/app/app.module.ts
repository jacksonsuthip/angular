import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { coustomComponent } from './coustom/coustom.component';
import { CoustomAddComponent } from './coustom/coustom-add/coustom-add.component';
import { CoustomListComponent } from './coustom/coustom-list/coustom-list.component';
import { EncapulationComponent } from './coustom/encapulation/encapulation.component';

// Directive import
import { BasicDirective } from './directiveFolder/basic-directive.directive';
// Module import
import { ServiceStudyModule } from './service-study/service-study.module';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    RegFormComponent,
    coustomComponent,
    CoustomAddComponent,
    CoustomListComponent,
    EncapulationComponent,
    BasicDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ServiceStudyModule, // add the feature module here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
