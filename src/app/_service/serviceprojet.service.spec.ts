import { TestBed } from '@angular/core/testing';

import { ServiceprojetService } from './serviceprojet.service';

describe('ServiceprojetService', () => {
  let service: ServiceprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
