import { WeatherService } from './../weather.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent implements OnInit {
  selectedLang: string;
  @Output() refreshClickFromControls = new EventEmitter();

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  refreshBg(): void {
    this.refreshClickFromControls.emit();
  }
}
