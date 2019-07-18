import { TestBed, async, inject } from '@angular/core/testing';

import { ObservableTestGuard } from './observable-test.guard';

describe('ObservableTestGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObservableTestGuard]
    });
  });

  it('should ...', inject([ObservableTestGuard], (guard: ObservableTestGuard) => {
    expect(guard).toBeTruthy();
  }));
});
