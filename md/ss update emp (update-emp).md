#open cmd in app folder
[edit-emp]
ng g c edit-emp

#ensure EditEmpComponent is added to declaration array of app.module
declarations: [
    ...
EditEmpComponent  
]

[list-emp]
#add to list-emp after "Delete" button.
 <button (click)="editEmp(emp)" style="margin-left: 20px;" class="btn btn-info"> Edit</button>

