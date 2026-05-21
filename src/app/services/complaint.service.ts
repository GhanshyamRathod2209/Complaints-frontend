import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  private apiUrl = 'https://localhost:7231/api/Complaint';

  constructor(private http: HttpClient) {}

  // GET complaints
  getComplaints(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // POST complaint
  addComplaint(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}