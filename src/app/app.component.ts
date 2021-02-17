import { Component, Input } from '@angular/core';

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
    this.i++;
    if (this.i > 2) this.i = 0;

    this.randomBg = this.bgImages[this.i];

    this.isToChange != this.isToChange;
    console.log(this.randomBg);
  }

  constructor() {}

  ngOnInit(): void {}
}
