import { TestBed, inject } from '@angular/core/testing';

import { TinTucService } from './tin-tuc.service';

describe('TinTucService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TinTucService]
    });
  });

  it('should be created', inject([TinTucService], (service: TinTucService) => {
    expect(service).toBeTruthy();
  }));
});
