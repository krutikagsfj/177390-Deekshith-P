#CREATE ROUTING MODULE
#create app-routing.module in app folder
ng generate module app-routing --flat=true

[check] if not created, create the EditEmpComponent in the app folder

[app-routing.module]
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';

export const routes: Routes = [
  { path: '', component: ListEmpComponent, pathMatch: 'full' },
  { path: 'list-emp', component: ListEmpComponent },
  { path: 'add-emp', component: AddEmpComponent },
  { path: 'edit-emp', component: EditEmpComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
 

#configure app.module to use routing
[app.module]
import { AppRoutingModule } from './app-routing.module';

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],

#configure app component to use the router outlet.
[app]
<h1>App Component</h1>
<router-outlet></router-outlet>

<!-- <br><br>
<div class="container">
  <app-list-emp></app-list-emp>
  <app-add-emp></app-add-emp>
</div> -->


#modify list-emp
import { Router } from "@angular/router";
constructor(private empService: EmployeeService, private router: Router, ) { }

editEmp(employee: Employee): void {
    localStorage.removeItem('editEmpId');
    localStorage.setItem('editEmpId', employee.id.toString());
    this.router.navigate(['add-emp']);
  }
