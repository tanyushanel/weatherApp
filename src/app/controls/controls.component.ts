import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent implements OnInit {
  degreeType: string = 'c';
  @Output() degreeTypeChanged = new EventEmitter<string>();

  @Output() refreshClickFromControls = new EventEmitter();

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }

  ngOnInit(): void {}

  refreshBg(): void {
    this.refreshClickFromControls.emit();
  }

  changeDegreeType(): void {
    this.degreeTypeChanged.emit(this.degreeType);
  }
}
