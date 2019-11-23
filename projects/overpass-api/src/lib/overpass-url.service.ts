import { Injectable } from '@angular/core';

@Injectable()
export class OverpassUrlService {
  private servers: string[] = [
    "https://overpass-api.de/api/interpreter",
    "https://overpass.kumi.systems/api/interpreter",
    "http://overpass.openstreetmap.fr/api/interpreter",
    // "https://overpass.nchc.org.tw"
  ];

  constructor() { }

  public getInterpreterUrl(): string {
    const index = Math.floor(Math.random() * this.servers.length);
    return this.servers[index];
  }
}
