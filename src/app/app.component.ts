import { Component, OnInit } from '@angular/core';
import { Poi } from '@osmpoi/poi';
import { OverpassApiService, BBox, OverpassResponse } from '@osmpoi/overpass-api';
import { NGXLogger } from 'ngx-logger';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  private bbox: BBox;
  public searchResults: OverpassResponse;
  constructor(private log: NGXLogger, private overpassApi: OverpassApiService) {
    this.bbox = new BBox(32.156, 34.819, 32.172, 34.840);
  }

  public poiSelected(poi: Poi) {
    this.log.debug(`Poi selected: ${poi.name}`);
    this.overpassApi.execute(poi.query, this.bbox).subscribe((result) => {
      this.searchResults = result;
    });
  }
}
