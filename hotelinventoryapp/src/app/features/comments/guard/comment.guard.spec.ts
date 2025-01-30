import { TestBed } from '@angular/core/testing';

import { CommentGuard } from './comment.guard';

describe('CommentGuardGuard', () => {
  let guard: CommentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CommentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
