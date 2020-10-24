import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { AppMocks } from './mocks/mocks';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, AuthGuard],
      declarations: [],
      providers: [
        { provide: AuthService, useValue: AppMocks.getMockAuthService() },
      ],
    });
    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
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
