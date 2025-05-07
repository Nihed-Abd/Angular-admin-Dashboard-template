import { TestBed } from '@angular/core/testing';

import { MultipleYaxisChartService } from './multiple-yaxis-chart.service';

describe('MultipleYaxisChartService', () => {
  let service: MultipleYaxisChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultipleYaxisChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
