import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  @Output() refreshClickFromHome = new EventEmitter();
  ngOnInit(): void {}

  randomBg(): void {
    this.refreshClickFromHome.emit();
  }
}
