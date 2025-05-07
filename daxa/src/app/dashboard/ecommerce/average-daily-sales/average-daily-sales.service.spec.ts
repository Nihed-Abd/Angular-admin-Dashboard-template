import { TestBed } from '@angular/core/testing';

import { AverageDailySalesService } from './average-daily-sales.service';

describe('AverageDailySalesService', () => {
  let service: AverageDailySalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AverageDailySalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
