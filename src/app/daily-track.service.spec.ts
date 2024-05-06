import { TestBed } from '@angular/core/testing';

import { DailyTrackService } from './daily-track.service';

describe('DailyTrackService', () => {
  let service: DailyTrackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyTrackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
