import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  private http = inject(HttpClient);

  private apiUrl = 'https://localhost:7231/api/Complaints';

  getComplaints(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createComplaint(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  updateComplaint(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deleteComplaint(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}