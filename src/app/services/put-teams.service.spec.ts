import { TestBed } from '@angular/core/testing';

import { PutTeamsService } from './put-teams.service';

describe('PostTeamsService', () => {
  let service: PutTeamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PutTeamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
