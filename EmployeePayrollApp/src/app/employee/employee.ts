import { Component, OnInit } from '@angular/core';
import { EmployeeData } from './employee.model';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee implements OnInit{

  employee!: EmployeeData;

  ngOnInit(): void {
    this.employee = {
      id:101,
      name: 'Kalki',
      department: 'IT',
      salary: 50000
    };
  }

}
