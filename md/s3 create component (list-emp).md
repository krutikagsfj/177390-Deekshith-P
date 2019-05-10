[optional] connect to backend
[app.module]
#add HttpClientModule
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListEmpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


#open cmd in app folder
[list-emp]
ng g c list-emp
ng generate component list-emp


[app.component]
#replace entire content

<br><br>
<div class="container">
  <app-list-emp></app-list-emp>
</div>


[list-emp]
<div class="col-md-8">
  <h2> Employee Details</h2>
  <div class="table-responsive table-container table-striped">
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Employee Name</th>
          <th>Salary</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let emp of employees">
          <td class="hidden">{{emp.id}}</td>
          <td>{{emp.employee_name}}</td>
          <td>{{emp.employee_salary}}</td>
          <td>{{emp.employee_age}}</td>
          <!-- <td>
            <button (click)="deleteEmp(emp)" class="btn btn-info"> Delete</button>
            <button (click)="editEmp(emp)" style="margin-left: 20px;" class="btn btn-info"> Edit</button>
          </td> -->
        </tr>
      </tbody>
    </table>
  </div>
</div>  

[optional] to directly component to backend.
[list-emp]
import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {

  employees: Employee[];

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:3000/employees';

  getEmployees() {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  ngOnInit() {
    this.getEmployees()
      .subscribe((data: Employee[]) => {
        this.employees = data;
      });
    console.log(this.employees);
  }
}


