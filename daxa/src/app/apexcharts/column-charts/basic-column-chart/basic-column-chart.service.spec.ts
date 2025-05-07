import { TestBed } from '@angular/core/testing';

import { BasicColumnChartService } from './basic-column-chart.service';

describe('BasicColumnChartService', () => {
  let service: BasicColumnChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicColumnChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
