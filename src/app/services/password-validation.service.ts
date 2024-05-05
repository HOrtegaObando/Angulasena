import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordValidationService {

  private baseUrl = 'http://localhost:8080/api/v1';
  constructor(private http:HttpClient) { }

  matchingPasswords(password: String, confirmPassword: String): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'any');  
  }
}
