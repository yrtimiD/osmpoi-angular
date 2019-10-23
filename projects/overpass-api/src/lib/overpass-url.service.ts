import { Injectable } from '@angular/core';

@Injectable()
export class OverpassUrlService {
  private servers: string[] = [
    "https://overpass.kumi.systems/api/interpreter",
    "https://overpass-api.de/api/interpreter"
  ];

  constructor() { }

  public getInterpreterUrl(): string {
    return this.servers[0]; //TODO: add some smart check/round-robin logic here
  }
}
