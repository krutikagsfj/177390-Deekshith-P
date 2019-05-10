#open cmd in app folder
[add-emp]
ng g c add-emp

#ensure AddEmpComponent is added to declaration array of app.module
declarations: [
    AppComponent,
    ListEmpComponent,
    AddEmpComponent
  ]

[app.component]
#replace entire content

<br><br>
<div class="container">
  <!-- <app-list-emp></app-list-emp> -->
  <app-add-emp></app-add-emp>
</div>


[app.module]
#make required changes
import { ReactiveFormsModule } from "@angular/forms";
.....
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ]

[add-emp]
<div class="col-md-6">
  <h2 class="text-center">{{empformlabel}}</h2>
  <form [formGroup]="addForm" novalidate class="form">
    <div class="form-group">
      <label for="empId">Employee Id:</label>
      <input type="number" formControlName="id" placeholder="Id" name="empId" class="form-control" id="empId">
    </div>

    <div class="form-group">
      <label for="empName">Employee Name:</label>
      <input formControlName="employee_name" placeholder="Employee Name" name="empName" class="form-control" id="empName">
      <div class="alert  alert-danger" *ngIf="addForm.get('employee_name').hasError('required') && addForm.get('employee_name').touched">
        Employee Name is required
      </div>
    </div>

    <div class="form-group">
      <label for="empSalary">Employee Salary:</label>
      <input formControlName="employee_salary" placeholder="Employee Salary" name="employee_salary" class="form-control" id="employee_salary">
      <div class="alert  alert-danger" *ngIf="addForm.get('employee_salary').hasError('maxlength') && addForm.get('employee_salary').touched">
        Employee Salary is required and should less than 9 characters.
      </div>
    </div>

    <div class="form-group">
      <label for="empAge">Employee Age:</label>
      <input formControlName="employee_age" placeholder="Employee Age" name="empAge" class="form-control" id="empAge">
      <div class="alert  alert-danger" *ngIf=" addForm.get('employee_age').hasError('maxlength') && addForm.get('employee_age').touched">
        Age is required and should less than 3 characters.
      </div>
    </div>
    <button class="btn btn-success" [disabled]='addForm.invalid' (click)="onSubmit()">Save</button>
    <br>
    <p>Form value: {{ addForm.value | json }}</p>
  </form>
</div>

[add-emp]
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  empformlabel: string = 'Add Employee';

  constructor(private formBuilder: FormBuilder, private empService: EmployeeService) {
  }

  addForm: FormGroup;
  
  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: [],
      employee_name: ['', Validators.required],
      employee_salary: ['', [Validators.required, Validators.maxLength(9)]],
      employee_age: ['', [Validators.required, Validators.maxLength(3)]]
    });
  }
  onSubmit() {
    console.log('Employee details sent to server!');
    this.empService.createUser(this.addForm.value)
      .subscribe(data => {
        console.log("Data Saved!");
      },
        error => {
          console.log("Error occured " + error);
          //alert(error);
      });
  }
}
