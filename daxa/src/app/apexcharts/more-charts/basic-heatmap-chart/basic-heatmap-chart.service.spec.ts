import { TestBed } from '@angular/core/testing';

import { BasicHeatmapChartService } from './basic-heatmap-chart.service';

describe('BasicHeatmapChartService', () => {
  let service: BasicHeatmapChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicHeatmapChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
