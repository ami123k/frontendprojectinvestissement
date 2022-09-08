import { TestBed } from '@angular/core/testing';

import { ServicepropositionService } from './serviceproposition.service';

describe('ServicepropositionService', () => {
  let service: ServicepropositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicepropositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
