import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should be able to signIn', () => {
    const userData = {
      email: '',
      password: ''
    };
    service.signIn(userData);
  });

  test('should be able to register', () => {
    const userData = {
      email: '',
      password: '',
    };
    service.register(userData);
  });

  test('should be able to loggedIn', () => {
    service.isLoggedIn();
  });
  test('should logout', () => {
    service.logout();
  });
});
