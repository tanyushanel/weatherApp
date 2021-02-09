import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Output() refreshClickFromHome = new EventEmitter();

  my123: string;

  ngOnInit(): void {
    window.setInterval(this.testTimer.bind(this), 1000);
  }

  constructor() {}

  randomBg(): void {
    this.refreshClickFromHome.emit();
  }

  homeDegreeChange(event: string): void {
    this.my123 = event;
  }

  testTimer() {
    console.log(this.my123);
  }
}
