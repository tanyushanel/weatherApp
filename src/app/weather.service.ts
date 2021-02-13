import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import * as moment from 'moment';

export class WeatherData {
  date: string;
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
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  weatherData: WeatherData;

  today: string;

  constructor() {
    this.today = moment().format('MMMM Do YYYY, h:mm');

    this.weatherData = new WeatherData();

    this.getWeatherData(this.today);
  }

  getWeatherData(day: any): any {
    let data = JSON.parse(
      '{ "coord": {    "lon": -122.08,    "lat": 37.39  },  "weather": [    {      "id": 800,      "main": "Clear",    "description": "clear sky",      "icon": "01d"    }],  "base": "stations",  "main": {    "temp": 282.55,    "feels_like": 281.86,    "temp_min": 280.37,    "temp_max": 284.26,    "pressure": 1023,    "humidity": 100  },  "visibility": 16093,  "wind": {    "speed": 1.5,    "deg": 350  },  "clouds": {    "all": 1  },  "dt": 1560350645,  "sys": {    "type": 1,    "id": 5122,    "message": 0.0139,    "country": "US",    "sunrise": 1560343627,    "sunset": 1560396563  },  "timezone": -25200,  "id": 420006353,  "name": "Mountain View",  "cod": 200      }'
    );
    this.setWeatherData(data);
  }

  setWeatherData(data): any {
    this.weatherData = {
      date: moment(this.today).format(),
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
      overcast: data.clouds.all * 100,
    };
  }
}
