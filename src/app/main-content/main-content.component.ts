import { WeatherData, WeatherService } from './../weather.service';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';
import { WeekDay } from '@angular/common';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit, OnChanges {
  @Input() mainSelectedLang: string;
  @Input() mainDegreeType: string;

  mainWeatherData: WeatherData;

  today: string;
  tomorrow: string;
  inOneDay: string;
  inTwoDays: string;

  constructor(
    private translate: TranslateService,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    moment.locale(this.mainSelectedLang);
    this.today = moment().format('MMMM Do YYYY, h:mm ');

    this.tomorrow = moment().add(1, 'days').format('ddd MMM Do');
    this.inOneDay = moment().add(2, 'days').format('ddd MMM Do');
    this.inTwoDays = moment().add(3, 'days').format('ddd MMM Do');

    this.weatherService.weatherDataSubject.subscribe(
      (weatherData: WeatherData) => {
        this.mainWeatherData = weatherData;
      }
    );

    this.weatherService.getWeatherData(this.mainSelectedLang);
  }

  ngOnChanges(): void {
    moment.locale(this.mainSelectedLang);
    this.today = moment().format('MMMM Do YYYY, h:mm ');

    this.tomorrow = moment().add(1, 'days').format('ddd MMM Do');
    this.inOneDay = moment().add(2, 'days').format('ddd MMM Do');
    this.inTwoDays = moment().add(3, 'days').format('ddd MMM Do');
  }
}
