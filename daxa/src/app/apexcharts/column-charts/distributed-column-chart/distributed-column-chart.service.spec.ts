import { TestBed } from '@angular/core/testing';

import { DistributedColumnChartService } from './distributed-column-chart.service';

describe('DistributedColumnChartService', () => {
  let service: DistributedColumnChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistributedColumnChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
