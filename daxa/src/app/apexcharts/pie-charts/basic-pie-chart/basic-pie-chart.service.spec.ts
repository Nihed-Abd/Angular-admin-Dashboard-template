import { TestBed } from '@angular/core/testing';

import { BasicPieChartService } from './basic-pie-chart.service';

describe('BasicPieChartService', () => {
  let service: BasicPieChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicPieChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
