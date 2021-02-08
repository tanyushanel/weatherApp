import { WeatherService } from './weather.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'weatherApp';

  bgImages: string[] = [
    '../assets/bg-1.png',
    '../assets/bg-2.png',
    '../assets/bg-3.png',
  ];
  randomBg: string = this.bgImages[0];

  changeBg(): void {
    this.randomBg = this.bgImages[
      Math.floor(Math.random() * this.bgImages.length)
    ];
  }

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}
}
