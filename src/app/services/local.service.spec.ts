import { TestBed } from '@angular/core/testing';

import { LocalService } from './local.service';

describe('LocalService', () => {
  let service: LocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should be able to get local text', () => {
    service.getLocalText();
  });

  test('should be able to get currency text', () => {
    const value = '';
    service.getCurrencyText(value);
  });
});
