import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-request-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  requests: {
    id: number;
    type: string;
    employee: { employeeId: string };
    requestItems: { name: string; quantity: number }[];
    status: string;
  }[] = [];

  currentUser = { role: 'Admin' };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('/requests').subscribe((res) => {
      this.requests = res;
    });
  }

  account() {
    return this.currentUser;
  }

  edit(id: number) {
    console.log('Edit request ID:', id);
  }

  delete(id: number) {
    this.http.delete(`/requests/${id}`).subscribe(() => {
      this.requests = this.requests.filter(r => r.id !== id);
    });
  }

  add() {
    console.log('Add new request');
  }
}
