import { WeatherService } from './../weather.service';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { WeatherData } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeWeatherData: WeatherData;

  @Output() onRefreshClickFromHome = new EventEmitter();

  @Input() homeSelectedLang: string;

  @Input() homeDegreeType: string;

  constructor(
    private translate: TranslateService,
    private weatherService: WeatherService
  ) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }
  ngOnInit(): void {
    this.homeWeatherData = this.weatherService.weatherData;

    this.homeDegreeType = 'C';
    this.homeSelectedLang = this.translate.currentLang;
  }

  randomBg(): void {
    this.onRefreshClickFromHome.emit();
  }

  homeDegreeChange(event: string): void {
    this.homeDegreeType = event;
  }

  homeLangChange(event: string): void {
    this.homeSelectedLang = event;
  }
}
