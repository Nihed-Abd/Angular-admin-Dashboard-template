import { TestBed } from '@angular/core/testing';

import { LineColumnAreaChartService } from './line-column-area-chart.service';

describe('LineColumnAreaChartService', () => {
  let service: LineColumnAreaChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineColumnAreaChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
