import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { from } from 'rxjs';
//import { from } from 'rxjs/observable/from';
import { map } from 'rxjs/operators';


import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  
  //baseUrl: string = 'http://localhost:8080/emps';
  //http://localhost:8080/employee/helo
  //baseUrl: string = 'http://localhost:8080/employee/helo';
  //baseUrl: string = 'http://localhost:2222/helo';
  
  heloBaseUrl: string = '/api/helo';
  getempsBaseUrl: string = '/api/emps';
  getempsByDeptIdBaseUrl: string = '/api/emps';
  saveempsBaseUrl: string = '/api/emps/create';  

  getEmployees() {
  	console.log(this.http.get<Employee>(this.getempsBaseUrl));
  	return this.http.get<Employee[]>(this.getempsBaseUrl);
  }
  
  getHello() {
    console.log(this.http.get<string>(this.heloBaseUrl));
  	return this.http.get<string>(this.heloBaseUrl);
  }
  
  getEmployeesByDeptId(id: string) {
  	return this.http.get<Employee[]>(this.getempsByDeptIdBaseUrl+ '/' + id);
  }
  
  createEmployee(employee: Employee) {
  	alert('createEmployee called::'+employee);
    return this.http.post(this.saveempsBaseUrl, employee);
  }


}
