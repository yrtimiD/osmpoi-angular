import { TestBed } from '@angular/core/testing';

import { OverpassApiService } from './overpass-api.service';

describe('OverpassApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OverpassApiService = TestBed.get(OverpassApiService);
    expect(service).toBeTruthy();
  });
});
