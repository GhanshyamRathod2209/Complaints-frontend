import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComplaintService } from '../../services/complaint.service';

@Component({
  selector: 'app-complaint',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  complaints: any[] = [];

  complaintData = {
    title: '',
    description: '',
    status: 'Pending',
    priority: 'Medium'
  };

  constructor(private complaintService: ComplaintService) {}

  ngOnInit(): void {
    this.getComplaints();
  }

  // GET complaints
  getComplaints() {
    this.complaintService.getComplaints().subscribe({
      next: (res: any) => {
        this.complaints = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  // POST complaint
  addComplaint() {
    this.complaintService.addComplaint(this.complaintData).subscribe({
      next: (res) => {
        console.log(res);

        alert('Complaint Added Successfully');

        this.getComplaints();

        this.complaintData = {
          title: '',
          description: '',
          status: 'Pending',
          priority: 'Medium'
        };
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}