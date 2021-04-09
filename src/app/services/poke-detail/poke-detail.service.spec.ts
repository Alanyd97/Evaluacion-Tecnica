import { TestBed } from '@angular/core/testing';

import { PokeDetailService } from './poke-detail.service';

describe('PokeDetailService', () => {
  let service: PokeDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
