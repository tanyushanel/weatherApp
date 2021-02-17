import { WeatherData, WeatherService } from './../weather.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit, OnChanges {
  @Input() mainSelectedLang: string;
  @Input() mainDegreeType: string;
  @Input() mainCityName: string;

  mainWeatherData: WeatherData;

  today: string;
  tomorrow: string;
  inOneDay: string;
  inTwoDays: string;

  constructor(
    private translate: TranslateService,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    moment.locale(this.mainSelectedLang);
    this.today = moment().format('MMMM DD YYYY, h:mm');

    this.tomorrow = moment().add(1, 'days').format('ddd MMM DD');
    this.inOneDay = moment().add(2, 'days').format('ddd MMM DD');
    this.inTwoDays = moment().add(3, 'days').format('ddd MMM DD');

    this.weatherService.weatherDataSubject.subscribe(
      (weatherData: WeatherData) => {
        this.mainWeatherData = weatherData;
      }
    );

    this.weatherService.getWeatherData(
      this.mainSelectedLang,
      this.mainCityName
    );
  }
}
