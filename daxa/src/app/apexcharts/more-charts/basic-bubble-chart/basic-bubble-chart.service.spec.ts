import { TestBed } from '@angular/core/testing';

import { BasicBubbleChartService } from './basic-bubble-chart.service';

describe('BasicBubbleChartService', () => {
  let service: BasicBubbleChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicBubbleChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
