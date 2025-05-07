import { TestBed } from '@angular/core/testing';

import { BasicLineChartService } from './basic-line-chart.service';

describe('BasicLineChartService', () => {
  let service: BasicLineChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicLineChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
