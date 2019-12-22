import { Component, OnInit } from '@angular/core';
import { Poi } from '@osmpoi/poi';
import { OverpassApiService, BBox, OverpassResponse } from '@osmpoi/overpass-api';
import { NGXLogger } from 'ngx-logger';
import { GeolocationService } from './geolocation.service';


@Component({
  selector: 'yr-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  private bbox: BBox;
  public location: Coordinates;
  public searchResults: OverpassResponse;
  constructor(private log: NGXLogger, geolocation: GeolocationService, private overpassApi: OverpassApiService) {
    geolocation.getCurrentLocation().then((position) => this.initMap(position));
  }

  private initMap(position: Position) {
    this.location = position.coords;
    const boxRadius = 0.01;
    this.bbox = new BBox(
      position.coords.longitude - boxRadius,
      position.coords.latitude - boxRadius,
      position.coords.longitude + boxRadius,
      position.coords.latitude + boxRadius
    );
    this.log.debug(`BBox: ${this.bbox}`);
  }

  public poiSelected(poi: Poi) {
    this.log.debug(`Poi selected: ${poi.name}`);
    this.overpassApi.execute(poi.query, this.bbox).subscribe((result) => {
      this.searchResults = result;
    });
  }
}
