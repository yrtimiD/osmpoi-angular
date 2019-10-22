import { Component, OnInit } from '@angular/core';

declare var ol: any; //TODO: replace with proper import

@Component({
  selector: 'yr-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {
  map: any;

  constructor() { }


  ngOnInit() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([73.8567, 18.5204]),
        zoom: 8
      })
    });
  }

  setCenter(lat: number, lon: number) {
    const view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([lon, lat]));
    view.setZoom(8);
  }

}
