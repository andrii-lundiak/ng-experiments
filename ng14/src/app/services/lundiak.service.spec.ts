import { TestBed } from '@angular/core/testing';
import { LundiakService } from './lundiak.service';
// import { BabiiService } from './babii.service';

describe('LundiakService', () => {
  let service: LundiakService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // providers: [
      //   BabiiService,
      //   { provide: BabiiService, useValue: () => { } }
      // ]
    });
    service = TestBed.inject(LundiakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('should have replaced babiiService', () => {
    // expect(service).toBeTruthy();
  });
});
