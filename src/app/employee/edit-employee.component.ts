import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Employee } from './employee';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
title: string;
employee: Employee;
employeeForm: FormGroup;
countries = ['USA', 'Canada', 'Uk', 'India'];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  	alert('edit ngOnInit');
  	this.title='Edit Employee';
  	let empId = localStorage.getItem("id");
  	let fullname = localStorage.getItem("fullname");
  	let email = localStorage.getItem("email");
    
  	this.employeeForm=this.formBuilder.group({
	  	fullName: ['',[Validators.required,Validators.minLength(2), Validators.maxLength(5)]],
	  	email: ['',[Validators.required]],
	  	countryList: ['India']
	  });
	  
	  
	  this.employeeForm.patchValue({
  		fullName: fullname,
  		email: email,
  		countryList: 'Uk'
 	})
	  
  }

}
