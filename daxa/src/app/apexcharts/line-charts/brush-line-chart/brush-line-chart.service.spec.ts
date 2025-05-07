import { TestBed } from '@angular/core/testing';

import { BrushLineChartService } from './brush-line-chart.service';

describe('BrushLineChartService', () => {
  let service: BrushLineChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrushLineChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
