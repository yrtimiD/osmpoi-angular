import { Component, OnInit } from '@angular/core';
import { PoiService, Poi } from '@osmpoi/poi';

@Component({
  selector: 'yr-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent implements OnInit {
  public data: Poi[];

  constructor(private poiService: PoiService) {
  }

  ngOnInit() {
    this.data = this.poiService.getPois();
  }

}
