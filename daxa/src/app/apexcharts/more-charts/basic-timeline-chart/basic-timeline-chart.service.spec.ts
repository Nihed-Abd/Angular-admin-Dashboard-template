import { TestBed } from '@angular/core/testing';

import { BasicTimelineChartService } from './basic-timeline-chart.service';

describe('BasicTimelineChartService', () => {
  let service: BasicTimelineChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicTimelineChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
