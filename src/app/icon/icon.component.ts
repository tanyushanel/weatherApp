import { WeatherData } from './../weather.service';
import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  isDay: boolean;
  @Input() weatherData: WeatherData;

  constructor() {}

  checkIsDay(): void {
    moment().hour() > 8 && moment().hour() < 20
      ? (this.isDay = true)
      : (this.isDay = false);
  }

  ngOnInit(): void {
    this.checkIsDay();
  }
}
