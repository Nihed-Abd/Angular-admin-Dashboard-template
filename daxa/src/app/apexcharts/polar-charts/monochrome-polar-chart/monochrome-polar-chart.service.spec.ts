import { TestBed } from '@angular/core/testing';

import { MonochromePolarChartService } from './monochrome-polar-chart.service';

describe('MonochromePolarChartService', () => {
  let service: MonochromePolarChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonochromePolarChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
