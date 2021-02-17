import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent implements OnInit {
  @Input() selectedLang: string;
  @Output() onChangeSelectedLang = new EventEmitter<string>();

  @Input() degreeType: string;
  @Output() onChangedDegreeType = new EventEmitter<string>();

  @Output() onRefreshClickFromControls = new EventEmitter();

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    this.degreeType = 'C';
    this.selectedLang = this.translate.currentLang;
  }

  refreshBg(): void {
    this.onRefreshClickFromControls.emit();
  }

  changeDegreeType(event: string): void {
    this.onChangedDegreeType.emit(event);
  }

  change(event: string) {
    this.onChangeSelectedLang.emit(event);
  }
}
