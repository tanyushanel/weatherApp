import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

export interface Day {
  city: string;
  date: moment.Moment;
  time: moment.Moment;
  feels: string;
  wind: string;
  humidity: string;
  map: string;
}

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  today: Day;
  city: string;
  country: string;
  date: moment.Moment;
  temp: string;
  time: moment.Moment;

  feel: string;
  wind: string;
  humidity: string;
  week: string;

  constructor() {}

  ngOnInit(): void {}
}
