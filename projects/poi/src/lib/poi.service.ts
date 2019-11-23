import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Poi {
  name: string;
  categories: string[];
  query: string;
}

@Injectable()
export class PoiService {

  constructor(private http: HttpClient) { }

  public getPois(): Promise<Poi[]> {
    return this.http.get<Poi[]>('assets/poi.json').toPromise();
  }
}
