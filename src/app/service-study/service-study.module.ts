import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather/weather.component';
import { WeatherInputComponent } from './weather/weather-input/weather-input.component';
import { WeatherDetailsComponent } from './weather/weather-details/weather-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    WeatherComponent,
    WeatherInputComponent,
    WeatherDetailsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule, // for api
    NgApexchartsModule,
  ],
  exports: [WeatherComponent], // have to export parent component
})
export class ServiceStudyModule {}
