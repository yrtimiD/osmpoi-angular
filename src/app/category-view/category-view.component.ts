import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { PoiService, Poi } from '@osmpoi/poi';

interface PoisByCategory { [category: string]: Poi[]; }

@Component({
  selector: 'yr-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent implements OnInit {
  public poisByCategory: PoisByCategory;

  @Output() poiSelected = new EventEmitter<Poi>();

  constructor(private log: NGXLogger, private poiService: PoiService) {
  }

  ngOnInit() {
    this.poiService.getPois().then((pois) => {
      this.poisByCategory = this.buildPoiTree(pois);
    });
  }

  public onSelect(poi: Poi): void {
    this.log.debug(`Selected ${poi.name}`);
    this.poiSelected.emit(poi);
  }

  private buildPoiTree(pois: Poi[]): PoisByCategory {
    const tree: PoisByCategory = {};

    for (let poi of pois) {
      for (let category of poi.categories) {
        let cat = tree[category] = tree[category] || [];
        cat.push(poi);
      }
    }

    return tree;
  }
}
