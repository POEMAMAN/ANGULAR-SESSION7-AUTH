import { TestBed } from '@angular/core/testing';

import { AssignTokenInterceptor } from './assign-token.interceptor';

describe('AssignTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AssignTokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AssignTokenInterceptor = TestBed.inject(AssignTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
