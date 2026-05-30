import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  private apiUrl = 'https://localhost:7231/api/Auth';

  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }
}