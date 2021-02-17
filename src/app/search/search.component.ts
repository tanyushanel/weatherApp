import { WeatherData, WeatherService } from './../weather.service';
import {
  Component,
  OnChanges,
  OnInit,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  cityNameInput: string;

  weatherData: WeatherData;
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  onSearchClick(): void {
    this.weatherService.getWeatherData('en', this.cityNameInput);
  }
}
