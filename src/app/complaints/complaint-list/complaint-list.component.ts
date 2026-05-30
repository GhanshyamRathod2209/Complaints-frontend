import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplaintService } from '../../core/services/complaint.service';

@Component({
  selector: 'app-complaint-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './complaint-list.component.html',
  styleUrls: ['./complaint-list.component.css']
})
export class ComplaintListComponent implements OnInit {

  private complaintService = inject(ComplaintService);

  complaints: any[] = [];

  ngOnInit(): void {
    this.loadComplaints();
  }

  loadComplaints() {
    this.complaintService.getComplaints()
      .subscribe({
        next: (response) => {

          console.log(response);

          this.complaints = response;
        },

        error: (error) => {
          console.error(error);
        }
      });
  }
}