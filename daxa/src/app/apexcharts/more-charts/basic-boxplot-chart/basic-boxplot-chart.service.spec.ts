import { TestBed } from '@angular/core/testing';

import { BasicBoxplotChartService } from './basic-boxplot-chart.service';

describe('BasicBoxplotChartService', () => {
  let service: BasicBoxplotChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicBoxplotChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
