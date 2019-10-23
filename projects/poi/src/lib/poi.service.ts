import { Injectable } from '@angular/core';

export interface Poi {
  name: string;
  categories: string[];
  query: string;
}

@Injectable()
export class PoiService {
  private mockData: Poi[] = [
    {
      name: 'Fuel station',
      categories: ['Transport', 'Shop'],
      query: 'amenity=fuel'
    },
    {
      name:'Shop',
      categories: ['Shop'],
      query: 'shop'
    }
  ];

  constructor() { }

  public getPois(): Poi[] {
    return this.mockData;
  }
}
