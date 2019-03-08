import { Component } from '@angular/core';
import { EmployeeserviceService } from './employee/employeeservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular6Project Tutorials Demo';
  
  //One way to call service
  //constructor(){
  	//let empservice=new EmployeeserviceService();
  	//empservice.printToConsole('hello service');
  //}
  
  //2nd Way to call service
  constructor(private empsvc:EmployeeserviceService){
  	empsvc.printToConsole('got the hello service');
  }
}
