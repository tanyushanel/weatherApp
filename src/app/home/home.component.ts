import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }
  ngOnInit(): void {
    this.homeDegreeType = 'C';
    this.homeSelectedLang = this.translate.currentLang;
    console.log('home *' + this.homeSelectedLang);
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
