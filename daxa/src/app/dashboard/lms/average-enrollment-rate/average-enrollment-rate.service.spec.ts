import { TestBed } from '@angular/core/testing';

import { AverageEnrollmentRateService } from './average-enrollment-rate.service';

describe('AverageEnrollmentRateService', () => {
  let service: AverageEnrollmentRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AverageEnrollmentRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
