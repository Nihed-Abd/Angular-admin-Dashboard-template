import { TestBed } from '@angular/core/testing';

import { GradientLineChartService } from './gradient-line-chart.service';

describe('GradientLineChartService', () => {
  let service: GradientLineChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradientLineChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
