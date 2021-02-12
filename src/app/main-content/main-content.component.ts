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
  afterTomor: string;

  constructor(
    private translate: TranslateService,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    moment.locale(this.mainSelectedLang);
    this.today = moment().format('MMMM Do YYYY, h:mm ');

    this.mainWeatherData = this.weatherService.weatherData;
  }

  ngOnChanges(): void {
    moment.locale(this.mainSelectedLang);
    this.today = moment().format('MMMM Do YYYY, h:mm ');
  }
}
