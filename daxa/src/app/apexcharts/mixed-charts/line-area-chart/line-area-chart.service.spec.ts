import { TestBed } from '@angular/core/testing';

import { LineAreaChartService } from './line-area-chart.service';

describe('LineAreaChartService', () => {
  let service: LineAreaChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineAreaChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
