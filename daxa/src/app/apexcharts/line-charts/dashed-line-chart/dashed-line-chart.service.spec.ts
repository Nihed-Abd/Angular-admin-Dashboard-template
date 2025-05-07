import { TestBed } from '@angular/core/testing';

import { DashedLineChartService } from './dashed-line-chart.service';

describe('DashedLineChartService', () => {
  let service: DashedLineChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashedLineChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
