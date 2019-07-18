import { TestBed, async, inject } from '@angular/core/testing';

import { BadCopGuard } from './bad-cop.guard';

describe('BadCopGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BadCopGuard]
    });
  });

  it('should ...', inject([BadCopGuard], (guard: BadCopGuard) => {
    expect(guard).toBeTruthy();
  }));
});
