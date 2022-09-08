import { TestBed } from '@angular/core/testing';

import { ServicecontratService } from './servicecontrat.service';

describe('ServicecontratService', () => {
  let service: ServicecontratService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicecontratService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
