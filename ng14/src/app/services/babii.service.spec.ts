import { TestBed } from '@angular/core/testing';

import { BabiiService } from './babii.service';

describe('BabiiService', () => {
  let service: BabiiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BabiiService);
  });

  it('should be created', () => {
    console.log('babii it', service);

    expect(service).toBeTruthy();
  });
});
