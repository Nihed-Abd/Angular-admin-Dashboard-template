import { TestBed } from '@angular/core/testing';

import { BasicCandlestickChartService } from './basic-candlestick-chart.service';

describe('BasicCandlestickChartService', () => {
  let service: BasicCandlestickChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicCandlestickChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
