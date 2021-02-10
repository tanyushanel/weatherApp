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
export class MainContentComponent implements OnInit, OnChanges {
  today: Day;

  @Input() mainSelectedLang: string;
  @Input() mainDegreeType: string;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    moment.locale(this.mainSelectedLang);

    this.today = new Day();

    this.today.time = moment().format('MMMM Do YYYY, h:mm ');
  }

  ngOnChanges(): void {
    moment.locale(this.mainSelectedLang);

    this.today.time = moment().format('MMMM Do YYYY, h:mm ');
  }
}
