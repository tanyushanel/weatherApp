import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { TranslateService } from '@ngx-translate/core';
import { WeatherData, WeatherService } from '../weather.service';

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  mapWeatherData: WeatherData;
  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  constructor(
    private translate: TranslateService,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.weatherService.weatherDataSubject.subscribe(
      (weatherData: WeatherData) => {
        this.mapWeatherData = weatherData;
      }
    );
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event) {
    this.markers.push({
      lat: $event.latlng.lat,
      lng: $event.latlng.lng,
      draggable: true,
    });
  }

  markerDragEnd(m: marker, $event) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true,
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false,
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true,
    },
  ];
}
