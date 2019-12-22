import { Component, OnInit, Input } from '@angular/core';
import {latLng, tileLayer, MapOptions } from 'leaflet';

@Component({
  selector: 'yr-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {
  options: MapOptions;
  @Input() centerLat: number;
  @Input() centerLon: number;

  constructor() { }


  ngOnInit() {
    this.options = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
          })
      ],
      zoom: 14,
      center: latLng(this.centerLat, this.centerLon),

    };
  }
}
