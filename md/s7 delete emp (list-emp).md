[app.component]
<br><br>
<div class="container">
  <app-list-emp></app-list-emp>
  <!-- <app-add-emp></app-add-emp> -->
</div>

[list-emp]
<button (click)="deleteEmp(emp)" class="btn btn-info"> Delete</button>

  deleteEmp(employee: Employee): void {
    this.empService.deleteEmployees(employee.id)
      .subscribe(data => {
        this.employees = this.employees.filter(emp => emp !== employee);
      })
  }
