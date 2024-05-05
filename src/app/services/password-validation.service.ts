import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordValidationService {

  private baseUrl = 'http://localhost:8080/';
  constructor(private http:HttpClient) { }

  matchingPasswords(user: any): Observable<any> {  
    return this.http.post(`${this.baseUrl}`+'login', user);  
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`+'login', user);
  }
}
