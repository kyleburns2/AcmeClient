import { Component, OnInit } from '@angular/core';
import { Application } from './application';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {
  applications: Application[] = [];

  application: Application = new Application();

  descStr = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  constructor() { }

  ngOnInit() {
    this.application.id = '1';
    this.application.name = 'HR App';
    this.application.description = this.descStr;
    this.application.departmentID = 1;
    this.applications.push(this.application);
    this.application = new Application();
    this.application.id = '2';
    this.application.name = 'IT App1';
    this.application.description = this.descStr;
    this.application.departmentID = 2;
    this.applications.push(this.application);
    this.application = new Application();
    this.application.id = '3';
    this.application.name = 'IT App2';
    this.application.description = this.descStr;
    this.application.departmentID = 2;
    this.applications.push(this.application);
    this.application = new Application();
    this.application.id = '4';
    this.application.name = 'Sales App';
    this.application.description = this.descStr;
    this.application.departmentID = 3;
    this.applications.push(this.application);
    this.application = new Application();
    this.application.id = '5';
    this.application.name = 'General App';
    this.application.description = this.descStr;
    this.application.departmentID = 4;
    this.applications.push(this.application);
  }

  getRandomCardClass(depID): string {
    let cardStr = '';
    switch (depID) {
      case 1: cardStr = 'card bg-light mb-3 ';
        break;
      case 2: cardStr = 'card text-white bg-info mb-3 ';
        break;
      case 3: cardStr = 'card text-white bg-secondary mb-3 ';
        break;
      case 4: cardStr = 'card text-white bg-success mb-3 ';
        break;
    }
    return cardStr + 'text-center';
  }

}
