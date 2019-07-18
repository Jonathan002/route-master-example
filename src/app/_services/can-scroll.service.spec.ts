import { TestBed } from '@angular/core/testing';

import { CanScrollService } from './can-scroll.service';

describe('CanScrollService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanScrollService = TestBed.get(CanScrollService);
    expect(service).toBeTruthy();
  });
});
