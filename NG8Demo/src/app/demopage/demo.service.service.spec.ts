import { TestBed } from '@angular/core/testing';

import { Demo.ServiceService } from './demo.service.service';

describe('Demo.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Demo.ServiceService = TestBed.get(Demo.ServiceService);
    expect(service).toBeTruthy();
  });
});
