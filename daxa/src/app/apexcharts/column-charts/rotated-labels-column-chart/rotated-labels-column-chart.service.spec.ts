import { TestBed } from '@angular/core/testing';

import { RotatedLabelsColumnChartService } from './rotated-labels-column-chart.service';

describe('RotatedLabelsColumnChartService', () => {
  let service: RotatedLabelsColumnChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RotatedLabelsColumnChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
