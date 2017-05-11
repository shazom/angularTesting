import { TestBed, async, inject } from '@angular/core/testing';

import { CanActivateViaUserGuard } from './can-activate-via-user.guard';

describe('CanActivateViaUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateViaUserGuard]
    });
  });

  it('should ...', inject([CanActivateViaUserGuard], (guard: CanActivateViaUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
