import { TestBed } from '@angular/core/testing';

import { MultipleRadarChartService } from './multiple-radar-chart.service';

describe('MultipleRadarChartService', () => {
  let service: MultipleRadarChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultipleRadarChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
