import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  //constructor() { }
  printToConsole(arg){
  	console.log('Arg..'+arg);
  }
  
  listEmployee():Employee{
  	console.log('listEmployee Started........');
  	var employee = {
      "fullName": "Bimal1",
      "email": "bimal1@email.com",
      "id": "1",
      "name": "Bimal11",
      "deptid": "11",
    }
    console.log('Listemployee Exit........');
    return employee;
  }

  
}
