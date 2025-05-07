import { TestBed } from '@angular/core/testing';

import { BasicScatterChartService } from './basic-scatter-chart.service';

describe('BasicScatterChartService', () => {
  let service: BasicScatterChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicScatterChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
