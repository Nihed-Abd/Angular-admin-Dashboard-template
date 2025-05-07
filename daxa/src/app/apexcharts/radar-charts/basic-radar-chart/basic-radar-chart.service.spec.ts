import { TestBed } from '@angular/core/testing';

import { BasicRadarChartService } from './basic-radar-chart.service';

describe('BasicRadarChartService', () => {
  let service: BasicRadarChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicRadarChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
