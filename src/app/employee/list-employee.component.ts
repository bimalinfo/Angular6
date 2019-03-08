import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { EmployeelistService } from './employeelist.service';
import { Employee } from './employee';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

employeeForm: FormGroup;
emps: Employee[];
title: string;

countries = ['USA', 'Canada', 'Uk', 'India'];
  constructor(private router: Router,public employeelistService: EmployeelistService) { }

  ngOnInit() {
  	//alert('List ngOnInit');
  	this.emps=this.employeelistService.getEmployeeList();
  	console.log('First record'+this.emps[0].fullName);
  }
  
  addEmployee():void{
  	alert('addEmployee..');
  	this.router.navigate(['login']);
  }
  deleteEmployee(emp:Employee):void{
  	alert('deleteEmployee: '+emp.fullName);
  }
  
  editEmployee(emp:Employee):void{
  	localStorage.removeItem("id");
    localStorage.setItem("id", emp.id.toString());
    localStorage.setItem("fullname", emp.fullName.toString());
    localStorage.setItem("email", emp.email.toString());
    
    //localStorage.setItem("empvo", emp);
    
    this.router.navigate(['edit',emp.id.toString()]);
  }

}
