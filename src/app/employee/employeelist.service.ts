import { Injectable } from '@angular/core';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeelistService {
emps:Employee[];
  constructor() { }
  
  getempsBaseUrl: string = '/api/emps';
  
  getEmployeeList() {
  	//return this.http.get<Employee[]>(this.getempsBaseUrl);
  	//alert('getEmployeeList');
  	this.emps = [
  		{
		 	"fullName": "Bimal1",
	      	"email": "bimal1@gmail.com",
	      	"id": "1",
	      	"name": "Bimal1",
	      	"deptid": "1"
     	},
     	{
		 	"fullName": "Bimal2",
	      	"email": "bimal2@gmail.com",
	      	"id": "2",
	      	"name": "Bimal2",
	      	"deptid": "2"
     	},
     	{
		 	"fullName": "Bimal3",
	      	"email": "bimal3@gmail.com",
	      	"id": "3",
	      	"name": "Bimal3",
	      	"deptid": "3"
     	},
     	{
		 	"fullName": "Bimal4",
	      	"email": "bimal4@gmail.com",
	      	"id": "4",
	      	"name": "Bimal4",
	      	"deptid": "4"
     	}
     ]
  	return this.emps; 
  }
  
}
