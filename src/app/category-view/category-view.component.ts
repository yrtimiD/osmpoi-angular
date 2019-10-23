import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { PoiService, Poi } from '@osmpoi/poi';

@Component({
  selector: 'yr-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent implements OnInit {
  public pois: Poi[];
  @Output() poiSelected = new EventEmitter<Poi>();

  constructor(private log: NGXLogger, private poiService: PoiService) {
  }

  ngOnInit() {
    this.pois = this.poiService.getPois();
  }

  public onSelect(poi: Poi): void {
    this.log.debug(`Selected ${poi.name}`);
    this.poiSelected.emit(poi);
  }

}
