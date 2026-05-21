import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'https://localhost:7231/weatherforecast';

  constructor(private http: HttpClient) {}

  getWeather() {
    return this.http.get(this.apiUrl);
  }
}