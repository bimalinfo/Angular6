import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { EmployeeserviceService } from './employeeservice.service';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

employeeForm: FormGroup;
fullNameLength=0;
validationMessages={
	'fullName':{
		'required' : 'Full name is required',
		'minlength' : 'Full name must be > 2',
		'maxlength' : 'Full name must be <6',
	},
	'email':{
		'required' : 'Email name is required'
	},
	'phone':{
		'required' : 'Phone name is required'
	},
	'skillName':{
		'required' : 'Skill name is required',
	},
	'experienceInYears':{
		'required' : 'Experience in years is required',
	},
	'proficiency' :{
		'required': 'Proficiency is required',
	},
	
};

formErrors={
'fullName' :'',
'email' : '',
'phone' : '',
'skillName': '',
'experienceInYears': '',
'proficiency': ''
};
countries = ['USA', 'Canada', 'Uk', 'India'];
title='';
//emps: Employee[];
helo:string;
emps:any[];
empdata:Employee;
//employee1:Employee;
employee1:any;
constructor(private formBuilder: FormBuilder,private router: Router,public employeeService: EmployeeService) { 
	
}

//ngOnInit() {
	  //this.employeeForm=new FormGroup({
	  	//fullName: new FormControl(),
	  	//email: new FormControl(),
	  	//Child FromGroup
	  	//skills:new FormGroup({
	  	//	skillName: new FormControl(),
	  	//	experienceInYears: new FormControl(),
	  	//	proficiency: new FormControl()
	  	//})
	  //});
//}
 
ngOnInit() {
	  this.employeeForm=this.formBuilder.group({
	  	fullName: ['',[Validators.required,Validators.minLength(2), Validators.maxLength(5)]],
	  	contactPreference: ['email'],
	  	email: ['',[Validators.required]],
	    phone: [''],
	  	countryList: ['India'],
	  	skills: this.formBuilder.group({
	  		skillName: ['',Validators.required],
	  		experienceInYears: ['',Validators.required],
	  		proficiency: ['beginner']
	  	})
	  });
	  
	  this.employeeForm.get('contactPreference').valueChanges.subscribe((data:string)=>{
	  	this.onContactPreferenceChange(data);
	  });
	  
	  this.employeeForm.valueChanges.subscribe((data) =>{
	  	this.logValidationErrors(this.employeeForm);
	  });
	  
	  //this.employeeForm.get('fullName').valueChanges.subscribe(value =>{
	  	//console.log(value);
	  //})
	  
	  //this.employeeForm.valueChanges.subscribe((value:any) =>{
	  	//console.log(JSON.stringify(value));
	  	//this.empdata=JSON.stringify(value);
	  	//console.log('EMPLOYEE Data:'+JSON.stringify(this.empdata));
	  //})
	  
	  //this.employeeForm.get('skills').valueChanges.subscribe((value:any) =>{
	  		//console.log(JSON.stringify(value));
	  //})
	  //this.employeeForm.get('fullName').valueChanges.subscribe((value:string) =>{
	  	//this.fullNameLength=value.length;
	  //})
	  this.fullNameLength=9000;
	  this.title='Create Employee';
	  let empservice=new EmployeeserviceService();
  	  empservice.printToConsole('hello service from create employee................');
  	  console.log('EmployeeserviceService::Email::'+empservice.listEmployee().email);
  	
  	    
  	  this.employeeService.getEmployees()
      .subscribe( data => {
        this.emps = data;
        console.log('Id::'+this.emps[0].id);
      	console.log('Full Name:::'+this.emps[0].name);
      	console.log('Dept Id:::'+this.emps[0].deptid);
      	
      	console.log('Id::'+this.emps[1].id);
      	console.log('Full Name:::'+this.emps[1].name);
      	console.log('Dept Id:::'+this.emps[1].deptid);
      });
      
      
     //Calling Service with parameter
     this.employeeService.getEmployeesByDeptId('1')
      .subscribe( data => {
        this.emps = data;
        console.log('Dept Id :: 1');
        console.log('Id::'+this.emps[0].id);
      	console.log('Full Name::'+this.emps[0].name);
      	console.log('Dept Id::'+this.emps[0].deptid);
      });
      
     //Create Employee
	 var employee = {
	 	"fullName": "Bimal1",
      	"email": "bimal1@gmail.com",
      	"id": "1",
      	"name": "Bimal1122",
      	"deptid": "11"
     }
    console.log('EMPLOYEE Data:'+JSON.stringify(employee));
    //this.employeeService.createEmployee(employee)
      //.subscribe( data => {
        //this.emps = data;
        //console.log('Employee Saved::ngOnInit '+this.emps.name);
      //});
     console.log('Exit init call .....');
}
  
  onContactPreferenceChange(selectedValue:string){
  	const phoneControl=this.employeeForm.get('phone');
  	if(selectedValue==='phone'){
  		alert('1');
  		phoneControl.setValidators(Validators.required);
  	}else{
  		alert('2');
  		phoneControl.clearValidators();
  	}
  	phoneControl.updateValueAndValidity();
  }
logKeyValuePairs(group:FormGroup):void{
  	//console.log(Object.keys(group.controls));
  	Object.keys(group.controls).forEach((key:string)=>{
  		const abstractControl=group.get(key);
  		if(abstractControl instanceof FormGroup){
  			this.logKeyValuePairs(abstractControl);
  			abstractControl.disable();
  		}else{
  			console.log('Key->'+' Value-> '+abstractControl.value);
  			//abstractControl.disable();
  		}
  	});
}
  
logValidationErrors(group:FormGroup):void{
  	//console.log(Object.keys(group.controls));
  	Object.keys(group.controls).forEach((key:string)=>{
  		const abstractControl=group.get(key);
  		if(abstractControl instanceof FormGroup){
  			this.logValidationErrors(abstractControl);
  			//abstractControl.disable();
  		}else{
  			//console.log('Key->'+' Value-> '+abstractControl.value);
  			this.formErrors[key]='';
  			if(abstractControl && !abstractControl.valid){
  				const messages=this.validationMessages[key];
  				//console.log(messages);
  				//console.log(abstractControl.errors);
  				
  				for(const errorKey in abstractControl.errors){
	  				if(errorKey){
	  					this.formErrors[key] +=messages[errorKey] + ' ';
	  				}
  			    }
  			}
  			
  		}
  	});
}
  
onSubmit():void{
	alert('ok');
	this.empdata=this.employeeForm.value;
  	console.log('EMPLOYEE Data:in OnSubmit method '+JSON.stringify(this.empdata));
	
	this.employee1 ={
		'fullName': this.employeeForm.controls.fullName.value,
		'email': this.employeeForm.controls.email.value,
		'id': '444',
		'name': 'Bimal444',
		'deptid': '444'
	}
	 
	 console.log("onSubmit employee1:: "+this.employee1.fullName);
	 console.log("onSubmit employee1:: "+this.employee1.email);
	 console.log("onSubmit employee1:: "+this.employee1.id);
	 console.log("onSubmit employee1:: "+this.employee1.name);
	 console.log("onSubmit employee1:: "+this.employee1.deptid);
	 
	 this.employeeService.createEmployee(this.employee1)
      .subscribe( data => {
        this.employee1 = data;
        console.log('Employee Saved::OnSubmit '+this.employee1.name);
     });
      
  	console.log(this.employeeForm);
  	console.log(this.employeeForm.touched);
  	console.log(this.employeeForm.controls.fullName.value);
  	console.log(this.employeeForm.get('fullName').value);
  	
}
  
onLoadDataClick():void{
  	//this.employeeForm.patchValue({
  		//fullName:'Bimal Panigrahy',
  		//email:'bimal.panigrahy@gmail.com',
  		//skills:{
  			//skillName:'Java',
  			//experienceInYears: '8',
  			//proficiency:'Beginner'
  		//}
  	
  	//})
  	//this.logKeyValuePairs(this.employeeForm);
  	this.logValidationErrors(this.employeeForm);
  	console.log(this.formErrors);
}

}
