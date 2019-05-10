#modify list-emp to consume the employee service.

import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
//DELETE CODE
//import { HttpClient } from '@angular/common/http';
//ADDED CODE
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {

  employees: Employee[];

  constructor(private empService: EmployeeService ) { }

  ngOnInit() {
    this.empService.getEmployees()
      .subscribe((data: Employee[]) => {
        this.employees = data;
      });
  }
  // DELETED CODE
  // constructor(private http: HttpClient) { }
  // baseUrl: string = 'http://localhost:3000/employees';

  // getEmployees() {
  //   return this.http.get<Employee[]>(this.baseUrl);
  // }
  // ngOnInit() {
  //   this.getEmployees()
  //     .subscribe((data: Employee[]) => {
  //       this.employees = data;
  //     });
  //   console.log(this.employees);
  // }
}

[test]
http://localhost:4200/