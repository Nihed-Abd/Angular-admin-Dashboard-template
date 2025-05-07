import { TestBed } from '@angular/core/testing';

import { SteplineLineChartService } from './stepline-line-chart.service';

describe('SteplineLineChartService', () => {
  let service: SteplineLineChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SteplineLineChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
