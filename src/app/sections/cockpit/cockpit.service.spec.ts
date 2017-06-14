/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CockpitService } from './cockpit.service';

describe('Service: Cockpit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CockpitService]
    });
  });

  it('should ...', inject([CockpitService], (service: CockpitService) => {
    expect(service).toBeTruthy();
  }));
});