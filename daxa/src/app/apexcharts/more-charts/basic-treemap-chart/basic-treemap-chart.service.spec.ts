import { TestBed } from '@angular/core/testing';

import { BasicTreemapChartService } from './basic-treemap-chart.service';

describe('BasicTreemapChartService', () => {
  let service: BasicTreemapChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicTreemapChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
