import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public employees: Employee[];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    console.log('Fetching all employees...');
      this.employeeService.getEmployees().subscribe(
        (response: Employee[]) => {
          console.log(response);
          this.employees = response;
        },
        (error: HttpErrorResponse) => {
          console.error(error);
        }
    );
  }

}