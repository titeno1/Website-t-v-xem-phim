import { TestBed, inject } from '@angular/core/testing';

import { TransformTrailerService } from './transform-trailer.service';

describe('TransformTrailerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransformTrailerService]
    });
  });

  it('should be created', inject([TransformTrailerService], (service: TransformTrailerService) => {
    expect(service).toBeTruthy();
  }));
});
