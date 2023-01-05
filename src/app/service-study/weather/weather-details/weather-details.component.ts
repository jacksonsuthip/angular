import { Component, DoCheck, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css'],
})
export class WeatherDetailsComponent implements OnInit, DoCheck {
  currentWeather: any = {
    name: '',
    icon: '',
    temp: 0,
    wind: 0,
    description: '',
  };
  chartOptions: any = {
    series: [],
    chart: {
      height: 340,
      type: 'line',
    },
    title: {
      text: 'Forecast',
    },
    stroke: {
      curve: 'smooth',
      width: 4,
    },
  };

  // weatherService from service
  constructor(
    public weatherService: WeatherService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getForcast();
  }

  // check when any content change in any file
  ngDoCheck() {
    if (this.weatherService.currentWeather.weather) {
      this.currentWeather = {
        name: this.weatherService.currentWeather.name,
        icon: `http://openweathermap.org/img/wn/${this.weatherService.currentWeather.weather[0].icon}.png`,
        temp: this.weatherService.currentWeather.main.temp,
        wind: this.weatherService.currentWeather.wind.speed,
        description: this.weatherService.currentWeather.weather[0].description,
      };
    }
  }

  getForcast() {
    // cross communication between components
    this.weatherService.crossCommunication.subscribe((regionName) => {
      // promise used for api call (resolve, reject) are arguments
      let promise: any = new Promise<void>((resolve, reject) => {
        this.http
          .get('https://api.openweathermap.org/data/2.5/forecast', {
            params: {
              q: regionName,
              appid: this.weatherService.appId,
            },
          })
          .toPromise()
          .then(
            (res: any) => {
              let series: any = [];
              res.list.forEach((val: any) => {
                series.push({
                  x: val.dt_txt,
                  y: val.main.temp,
                });
              });

              this.chartOptions.series = [
                {
                  name: res.city.name,
                  data: series,
                },
              ];
              resolve();
            },
            (msg) => {
              reject(msg);
            }
          );
      });
    });
  }
}
