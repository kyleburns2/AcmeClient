import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
  dropdownTrigIcon = 'fa fa-caret-down';

  employees: Employee[] = [];

  selectedEmployee: Employee;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  emp: Employee = new Employee();

  constructor() { }

  ngOnInit() {
    this.emp.id = '1';
    this.emp.firstName = 'Bob';
    this.emp.lastName = 'Smith';
    this.emp.title = 'Developer';
    this.emp.department = 'IT';
    this.emp.officeLocation = 'New York';
    this.emp.email = 'bob@email.com';
    this.emp.phoneNumber = '(123)-456-7890';
    this.employees.push(this.emp);
    this.emp = new Employee();
    this.emp.id = '2';
    this.emp.firstName = 'Sue';
    this.emp.lastName = 'Johnson';
    this.emp.title = 'Salesperson';
    this.emp.department = 'Sales';
    this.emp.officeLocation = 'Tokyo';
    this.emp.email = 'sue@email.com';
    this.emp.phoneNumber = '(123)-456-7890';
    this.employees.push(this.emp);
    this.emp = new Employee();
    this.emp.id = '3';
    this.emp.firstName = 'Mary';
    this.emp.lastName = 'Davis';
    this.emp.title = 'Tester';
    this.emp.department = 'IT';
    this.emp.officeLocation = 'London';
    this.emp.email = 'mary@email.com';
    this.emp.phoneNumber = '(123)-456-7890';
    this.employees.push(this.emp);
    this.emp = new Employee();
    this.emp.id = '4';
    this.emp.firstName = 'Alan';
    this.emp.lastName = 'Jones';
    this.emp.title = 'Recruiter';
    this.emp.department = 'HR';
    this.emp.officeLocation = 'Paris';
    this.emp.email = 'alan@email.com';
    this.emp.phoneNumber = '(123)-456-7890';
    this.employees.push(this.emp);

    this.sortOptions = [
      { label: 'First Name', value: 'lastName' },
      { label: 'Last Name', value: 'lastName' },
      { label: 'Title', value: 'title' },
      { label: 'Department', value: 'department' },
      { label: 'Office Locaiton', value: 'officeLocation' }
    ];
  }

  selectEmployee(event: Event, emp: Employee) {
    this.selectedEmployee = emp;
    this.displayDialog = true;
    event.preventDefault();
  }

  closeDialog() {
    this.displayDialog = false;
    this.selectedEmployee = null;
  }

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onDialogHide() {
    this.selectedEmployee = null;
  }
}
