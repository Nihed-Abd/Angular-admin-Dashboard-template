import { TestBed } from '@angular/core/testing';

import { RangeColumnChartService } from './range-column-chart.service';

describe('RangeColumnChartService', () => {
  let service: RangeColumnChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RangeColumnChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
