import { TestBed, inject } from '@angular/core/testing';

import { CanDeactiveService } from './can-deactive.service';

describe('CanDeactiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeactiveService]
    });
  });

  it('should be created', inject([CanDeactiveService], (service: CanDeactiveService) => {
    expect(service).toBeTruthy();
  }));
});
