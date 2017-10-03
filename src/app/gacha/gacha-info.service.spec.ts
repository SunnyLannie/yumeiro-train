import { TestBed, inject } from '@angular/core/testing';

import { GachaInfoService } from './gacha-info.service';

describe('GachaInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GachaInfoService]
    });
  });

  it('should be created', inject([GachaInfoService], (service: GachaInfoService) => {
    expect(service).toBeTruthy();
  }));
});
