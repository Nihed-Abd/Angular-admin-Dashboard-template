import { TestBed } from '@angular/core/testing';

import { PolygonRadarChartService } from './polygon-radar-chart.service';

describe('PolygonRadarChartService', () => {
  let service: PolygonRadarChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolygonRadarChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
