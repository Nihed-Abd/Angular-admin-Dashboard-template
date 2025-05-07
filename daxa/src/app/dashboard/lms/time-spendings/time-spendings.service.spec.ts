import { TestBed } from '@angular/core/testing';

import { TimeSpendingsService } from './time-spendings.service';

describe('TimeSpendingsService', () => {
  let service: TimeSpendingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeSpendingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
