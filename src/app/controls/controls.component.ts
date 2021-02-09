import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent implements OnInit {
  selectedLang: string;
  @Output() refreshClickFromControls = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  refreshBg(): void {
    this.refreshClickFromControls.emit();
  }
}
