import { TestBed } from '@angular/core/testing';

import { TotalSalesService } from './total-sales.service';

describe('TotalSalesService', () => {
  let service: TotalSalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalSalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
