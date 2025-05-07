import { TestBed } from '@angular/core/testing';

import { PieDonutChartService } from './pie-donut-chart.service';

describe('PieDonutChartService', () => {
  let service: PieDonutChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PieDonutChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
