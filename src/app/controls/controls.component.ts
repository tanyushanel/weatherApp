import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent implements OnInit {
  @Input() selectedLang: string;
  @Output() selectedLangChange = new EventEmitter<string>();

  @Input() degreeType: string;
  @Output() degreeTypeChanged = new EventEmitter<string>();

  @Output() refreshClickFromControls = new EventEmitter();

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    this.degreeType = 'C';
    this.selectedLang = this.translate.currentLang;
    console.log('control ' + this.selectedLang);
  }

  refreshBg(): void {
    this.refreshClickFromControls.emit();
  }

  changeDegreeType(event): void {
    this.degreeTypeChanged.emit(event);
  }

  change(event) {
    this.selectedLangChange.emit(event);
  }
}
