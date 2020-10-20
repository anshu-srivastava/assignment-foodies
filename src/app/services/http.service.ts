import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }
  // tslint:disable-next-line: typedef
  getHeader() {
    const json = sessionStorage.getItem('token');
    if (json) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${json}`
      });
      return { headers };

    }
    return { headers: null };
  }

  getSecured(url): Observable<any> {
    return this.httpClient.get(url);
  }

  postSecured(url, payload): Observable<any> {
    return this.httpClient.post(url, payload, this.getHeader());
  }

  deleteSecured(url): Observable<any> {
    return this.httpClient.delete(url, this.getHeader());
  }

  // tslint:disable-next-line: typedef
  patchSecured(url, payload) {
    return this.httpClient.patch(url, payload, this.getHeader());
  }

  postLogin(url, payload): Observable<any> {
    return this.httpClient.post(url, payload);
  }
}
