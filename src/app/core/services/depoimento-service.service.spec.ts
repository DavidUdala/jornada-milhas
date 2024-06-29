import { TestBed } from '@angular/core/testing';

import { DepoimentoServiceService } from './depoimento-service.service';

describe('DepoimentoServiceService', () => {
  let service: DepoimentoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepoimentoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
