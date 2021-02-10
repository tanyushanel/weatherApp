import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent implements OnInit {
  @Input() degreeType: string;
  @Output() degreeTypeChanged = new EventEmitter<string>();

  @Output() refreshClickFromControls = new EventEmitter();

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }

  ngOnInit(): void {
    this.degreeType = 'C';
  }

  refreshBg(): void {
    this.refreshClickFromControls.emit();
  }

  changeDegreeType(event): void {
    this.degreeTypeChanged.emit(event);
  }
}
