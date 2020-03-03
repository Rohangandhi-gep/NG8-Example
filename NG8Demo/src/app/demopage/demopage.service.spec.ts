import { TestBed } from '@angular/core/testing';

import { DemopageService } from './demopage.service';

describe('DemopageService', () => {
  let service: DemopageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemopageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
