 
#create project
ng new p2-crud-employee-app
npm install --save bootstrap [or]
npm install -g bootstrap [or]
npm install bootstrap 

#add this to style.css (global styles.)
@import "~bootstrap/dist/css/bootstrap.css";

[alternate]
#use cdn in style.css



#SET UP JSON SERVER
[install]
npm install -g json-server

#create server-data folder inside project root folder
#create employees.json in server-data
{
  "employees": [
    {
      "id": 1,
      "employee_name": "Anne",
      "employee_salary": 100,
      "employee_age": 50
    },
    {
      "id": 2,
      "employee_name": "Benny",
      "employee_salary": 1000,
      "employee_age": 500
    },
    {
      "id": 3,
      "employee_name": "New",
      "employee_salary": "Employee",
      "employee_age": "50"
    },
    {
      "id": 4,
      "employee_name": "hero",
      "employee_salary": "456",
      "employee_age": "5"
    },
    {
      "id": 5,
      "employee_name": "arun parker",
      "employee_salary": "6785",
      "employee_age": "45"
    }
  ]
}

[run]
#open terminal in server-data folder.
json-server --watch employees.json
[access]
http://localhost:3000/employees
http://localhost:3000/employees/1

