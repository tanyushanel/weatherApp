import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';

export class Day {
  time?: string;
  feels?: string;
  wind?: string;
  humidity?: string;
}

export class City {
  city: string;
  country: string;
  time?: moment.Moment;
  locale?: string;
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
  temp: string;
  time: moment.Moment;

  feel: string;
  wind: string;
  humidity: string;
  week: string;

  @Input() abc: string;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    moment.locale(this.translate.currentLang);

    console.log(moment.locale());
    this.today = new Day();

    this.today.time = moment().format('MMMM Do YYYY, h:mm ');
  }
}
