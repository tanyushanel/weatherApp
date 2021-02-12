import { WeatherService } from './../weather.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { WeatherData } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Output() refreshClickFromHome = new EventEmitter();

  @Input() homeSelectedLang: string;
  @Output() homeSelectedLangChange = new EventEmitter<string>();

  @Input() homeDegreeType: string;

  homeWeatherData: WeatherData;

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
    this.homeDegreeType = 'C';
    this.homeSelectedLang = this.translate.currentLang;

    this.homeWeatherData = this.weatherService.weatherData;
  }

  randomBg(): void {
    this.refreshClickFromHome.emit();
  }

  homeDegreeChange(event: string): void {
    this.homeDegreeType = event;
  }

  homeLangChange(): void {
    this.homeSelectedLangChange.emit(this.homeSelectedLang);
  }
}
