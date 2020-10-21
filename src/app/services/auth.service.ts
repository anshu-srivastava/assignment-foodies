import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  /* public signIn(userData: User): void {
    localStorage.setItem('ACCESS_TOKEN', 'access_token');
  }
  // tslint:disable-next-line: typedef
  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  public logout(): void {
    localStorage.removeItem('ACCESS_TOKEN');
  } */
}
