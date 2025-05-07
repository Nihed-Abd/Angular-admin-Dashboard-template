import { TestBed } from '@angular/core/testing';

import { ActiveStudentsService } from './active-students.service';

describe('ActiveStudentsService', () => {
  let service: ActiveStudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveStudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
