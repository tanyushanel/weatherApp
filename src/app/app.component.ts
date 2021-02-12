import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY } from '@angular/cdk/overlay/overlay-directives';
import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [],
})
export class AppComponent {
  title = 'weatherApp';

  bgImages: string[] = [
    '../assets/bg-1.png',
    '../assets/bg-2.png',
    '../assets/bg-3.png',
  ];

  i: number = 0;
  randomBg: string = this.bgImages[this.i];
  isToChange: boolean = true;

  changeBg(): void {
    this.randomBg = this.bgImages[
      // Math.floor(Math.random() * this.bgImages.length)
      this.i < 3 ? this.i++ : (this.i = 0)
    ];

    this.isToChange != this.isToChange;
  }

  constructor() {}

  ngOnInit(): void {}
}
