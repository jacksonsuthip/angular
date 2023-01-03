// same as useContext but some difference having
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {
  currentWeather: any = {};
  forecast: any = {
    name: [],
    data: [],
  };
  appId = 'd4cf99d056fa85bb8c565ea3b65940b9';

  // EventEmitter to cross component communication
  crossCommunication = new EventEmitter<string>();

  // HttpClient for api
  constructor(private http: HttpClient) {}

  // function to trigger api
  onAddCurrentWeather(value: any) {
    this.http
      .get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: value,
          appid: this.appId,
        },
      })
      .subscribe((data: any) => {
        this.currentWeather = data;
      });
  }
}
