import { TestBed } from '@angular/core/testing';

import { DemopageserviceService } from './demopageservice.service';

describe('DemopageserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemopageserviceService = TestBed.get(DemopageserviceService);
    expect(service).toBeTruthy();
  });
});
