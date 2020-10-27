import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    guard = TestBed.inject(AuthGuard);
  });

  test('should be created', () => {
    expect(guard).toBeTruthy();
  });

  test('should be able to hit route when user is logged in', () => {
    const routeMock: any = { snapshot: {} };
    const routeStateMock: any = { snapshot: {} };
    guard.canActivate(routeMock, routeStateMock);
   });
});
