import { TestBed } from '@angular/core/testing';

import { InpserveService } from './inpserve.service';

describe('InpserveService', () => {
  let service: InpserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InpserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
