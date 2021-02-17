import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject, Observable } from 'rxjs';

export class WeatherData {
  temp: number;
  city: string;
  country: string;

  feels: number;
  wind: number;
  humidity: number;
  coords: {
    lat: string;
    lng: string;
  };
  overcast: number;
  rain: number;
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  weatherData: WeatherData;
  weatherDataSubject = new BehaviorSubject<WeatherData>(null);

  today: string;

  constructor(private http: HttpClient) {
    this.today = moment().format('MMMM DD YYYY, h:mm');
    this.weatherData = new WeatherData();
  }

  getWeatherData(lang: string, cityName: string = 'Minsk'): void {
    this.http
      .get<any>(
        `http://api.openweathermap.org/data/2.5/find?q=${cityName}&appid=2ab8e34518940df98867eedb0c64a5cb&lang=${lang}`
      )
      .subscribe((res: any) => {
        this.setWeatherData(res.list[0]);
        this.weatherDataSubject.next(this.weatherData);
      });
  }

  setWeatherData(data: any): any {
    this.weatherData = {
      coords: {
        lat: data.coord.lat.toString(),
        lng: data.coord.lon.toString(),
      },
      city: data.name,
      country: data.sys.country,
      temp: data.main.temp - 273.15,
      feels: data.main.feels_like - 273.15,
      wind: data.wind.speed,
      humidity: data.main.humidity,
      overcast: data.clouds.all,
      rain: data.rain,
    };
  }
}
