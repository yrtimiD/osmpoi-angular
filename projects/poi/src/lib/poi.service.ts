import { Injectable } from '@angular/core';

export interface Poi {
  categories: string[];
  query: string;
}

export class PoiService {
  private mockData: Poi[] = [
    {
      categories: ['Transport', 'Shop'],
      query: 'amenity=fuel'
    },
    {
      categories: ['Shop'],
      query: 'shop'
    }
  ];
  constructor() { }

  public getPois(): Poi[] {
    return this.mockData;
  }
}
