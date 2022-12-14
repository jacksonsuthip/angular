import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { coustomComponent } from './coustom/coustom.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { ServerComponent } from './server/server.component';
import { WeatherComponent } from './service-study/weather/weather.component';

const routes: Routes = [
  { path: '', redirectTo: '/reg-form', pathMatch: 'full' },
  { path: 'demo', component: ServerComponent },
  { path: 'reg-form', component: RegFormComponent },
  { path: 'custom', component: coustomComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'form-reactive', component: FormReactiveComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
