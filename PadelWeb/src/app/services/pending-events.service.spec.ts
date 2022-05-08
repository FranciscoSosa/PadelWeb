import { TestBed } from '@angular/core/testing';

import { PendingEventsService } from './pending-events.service';

describe('PendingEventsService', () => {
  let service: PendingEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PendingEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
