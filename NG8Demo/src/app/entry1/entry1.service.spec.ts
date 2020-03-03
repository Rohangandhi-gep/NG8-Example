import { TestBed } from '@angular/core/testing';

import { Entry1Service } from './entry1.service';

describe('Entry1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Entry1Service = TestBed.get(Entry1Service);
    expect(service).toBeTruthy();
  });
});
