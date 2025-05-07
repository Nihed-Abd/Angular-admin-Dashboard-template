import { TestBed } from '@angular/core/testing';

import { BasicRadialbarChartService } from './basic-radialbar-chart.service';

describe('BasicRadialbarChartService', () => {
  let service: BasicRadialbarChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicRadialbarChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
