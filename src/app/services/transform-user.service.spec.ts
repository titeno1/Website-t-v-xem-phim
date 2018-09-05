import { TestBed, inject } from '@angular/core/testing';

import { TransformUserService } from './transform-user.service';

describe('TransformUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransformUserService]
    });
  });

  it('should be created', inject([TransformUserService], (service: TransformUserService) => {
    expect(service).toBeTruthy();
  }));
});
