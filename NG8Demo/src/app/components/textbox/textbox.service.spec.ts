import { TestBed } from '@angular/core/testing';

import { TextboxService } from './textbox.service';

describe('TextboxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextboxService = TestBed.get(TextboxService);
    expect(service).toBeTruthy();
  });
});
