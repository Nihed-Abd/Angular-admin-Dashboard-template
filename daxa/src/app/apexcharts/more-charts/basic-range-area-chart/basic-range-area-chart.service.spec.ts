import { TestBed } from '@angular/core/testing';

import { BasicRangeAreaChartService } from './basic-range-area-chart.service';

describe('BasicRangeAreaChartService', () => {
  let service: BasicRangeAreaChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicRangeAreaChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
