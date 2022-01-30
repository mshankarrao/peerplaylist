import { TestBed } from '@angular/core/testing';

import { SonrService } from './sonr.service';

describe('SonrService', () => {
  let service: SonrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SonrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
