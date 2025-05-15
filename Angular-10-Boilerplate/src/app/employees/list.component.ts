import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../_models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  employees: Employee[] = [];
  currentUser = { role: 'Admin' };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Employee[]>('/employees').subscribe((res) => {
      this.employees = res;
    });
  }

  account() {
    return this.currentUser;
  }

  viewRequests(id: number) {
    console.log('Viewing requests for employee:', id);
  }

  viewWorkflows(id: number) {
    console.log('Viewing workflows for employee:', id);
  }

  transfer(employee: Employee) {
    console.log('Transferring employee:', employee);
  }

  edit(id: number) {
    console.log('Editing employee:', id);
  }

  delete(id: number) {
    this.http.delete(`/employees/${id}`).subscribe(() => {
      this.employees = this.employees.filter(e => e.id !== id);
    });
  }

  add() {
    console.log('Adding new employee');
  }
}
