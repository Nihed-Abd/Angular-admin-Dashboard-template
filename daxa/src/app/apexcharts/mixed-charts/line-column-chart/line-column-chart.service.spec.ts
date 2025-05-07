import { TestBed } from '@angular/core/testing';

import { LineColumnChartService } from './line-column-chart.service';

describe('LineColumnChartService', () => {
  let service: LineColumnChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineColumnChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
