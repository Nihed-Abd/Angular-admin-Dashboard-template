import { TestBed } from '@angular/core/testing';

import { TotalCoursesSalesService } from './total-courses-sales.service';

describe('TotalCoursesSalesService', () => {
  let service: TotalCoursesSalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalCoursesSalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
