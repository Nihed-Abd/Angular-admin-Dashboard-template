import { TestBed } from '@angular/core/testing';

import { BasicPolarChartService } from './basic-polar-chart.service';

describe('BasicPolarChartService', () => {
  let service: BasicPolarChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicPolarChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
