import { TestBed } from '@angular/core/testing';

import { StackedColumnChartService } from './stacked-column-chart.service';

describe('StackedColumnChartService', () => {
  let service: StackedColumnChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StackedColumnChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
