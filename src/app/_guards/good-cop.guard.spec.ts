import { TestBed, async, inject } from '@angular/core/testing';

import { GoodCopGuard } from './good-cop.guard';

describe('GoodCopGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoodCopGuard]
    });
  });

  it('should ...', inject([GoodCopGuard], (guard: GoodCopGuard) => {
    expect(guard).toBeTruthy();
  }));
});
