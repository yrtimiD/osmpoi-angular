import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  private readonly zeroPosition: Position = {
    coords: {
      latitude: 0,
      longitude: 0,
      accuracy: 0,
      altitude: 0,
      altitudeAccuracy: 0,
      heading: 0,
      speed: 0
    },
    timestamp: 0
  };

  constructor(private log: NGXLogger, @Inject(PLATFORM_ID) private plarformId: object) { }

  getCurrentLocation(): Promise<Position> {
    return new Promise((resolve) => {
      if (isPlatformBrowser(this.plarformId)) {
        window.navigator.geolocation.getCurrentPosition((position: Position) => {
          resolve(position);
        }, (positionError: PositionError) => {
          this.log.error(`Can't get your location: ${positionError.message} (${positionError.code})`);
          resolve(this.zeroPosition);
        });
      } else {
        this.log.error(`Can't get your location: not a browser`);
        resolve(this.zeroPosition);
      }
    });
  }
}
