import { HttpClient } from '@angular/common/http';
import { OverpassUrlService } from './overpass-url.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export class BBox {
  /** Minimum latitude */
  south: number;
  /** Minimum longitude */
  west: number;
  /** Maximum latitude */
  north: number;
  /** Maximum longiture */
  east: number;

  constructor(south: number, west: number, north: number, east: number) {
    this.south = south;
    this.west = west;
    this.north = north;
    this.east = east;
  }

  public toString() {
    return `${this.south},${this.west},${this.north},${this.east}`;
  }
}

export interface Element {
  type: 'node' | 'way';
  id: number;
  lat: number;
  lon: number;
  tags: { [name: string]: string };
}

export interface OverpassResponse {
  elements: Element[];
}

@Injectable()
export class OverpassApiService {

  constructor(private http: HttpClient, private overpassUrl: OverpassUrlService) { }

  private constructQuery(query: string, area: BBox) {
    const bbox = area.toString();
    const overpassQuery = `[out:json][timeout:20];(node[${query}](${bbox});way[${query}](${bbox}););out center tags qt;`;
    return overpassQuery;
  }

  public execute(query: string, area: BBox): Observable<OverpassResponse> {
    const url = this.overpassUrl.getInterpreterUrl();
    const overpassQuery = this.constructQuery(query, area);
    return this.http.get<OverpassResponse>(url, {
      params: {
        data: overpassQuery
      }
    });
  }
}
