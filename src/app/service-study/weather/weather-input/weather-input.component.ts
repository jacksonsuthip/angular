import { Component } from '@angular/core';
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-weather-input',
  templateUrl: './weather-input.component.html',
  styleUrls: ['./weather-input.component.css'],
})
export class WeatherInputComponent {
  forecast: any = {
    name: [],
    data: [],
  };

  constructor(private weatherService: WeatherService) {}

  onCheckWeather(region: HTMLInputElement) {
    this.weatherService.onAddCurrentWeather(region.value); // trigger function in service file
    this.weatherService.crossCommunication.emit(region.value); // cross communication between component using service
  }
}
