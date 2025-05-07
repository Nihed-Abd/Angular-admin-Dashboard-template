import { TestBed } from '@angular/core/testing';

import { BrushLineChart2Service } from './brush-line-chart2.service';

describe('BrushLineChart2Service', () => {
  let service: BrushLineChart2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrushLineChart2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
