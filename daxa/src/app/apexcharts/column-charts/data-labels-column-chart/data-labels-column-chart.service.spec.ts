import { TestBed } from '@angular/core/testing';

import { DataLabelsColumnChartService } from './data-labels-column-chart.service';

describe('DataLabelsColumnChartService', () => {
  let service: DataLabelsColumnChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataLabelsColumnChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
