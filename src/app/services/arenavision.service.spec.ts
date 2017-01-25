/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArenavisionService } from './arenavision.service';

describe('ArenavisionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArenavisionService]
    });
  });

  it('should ...', inject([ArenavisionService], (service: ArenavisionService) => {
    expect(service).toBeTruthy();
  }));
});
