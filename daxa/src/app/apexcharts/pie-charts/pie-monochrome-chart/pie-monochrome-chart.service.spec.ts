import { TestBed } from '@angular/core/testing';

import { PieMonochromeChartService } from './pie-monochrome-chart.service';

describe('PieMonochromeChartService', () => {
  let service: PieMonochromeChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PieMonochromeChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
