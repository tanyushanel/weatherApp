import { WeatherData, WeatherService } from './../weather.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  weatherData: WeatherData;
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherData.city = this.weatherService.weatherData.city;
  }
}
