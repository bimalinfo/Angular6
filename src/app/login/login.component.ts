import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
id:string;
validationMessages={
	'userName':{
		'required' : 'User name is required'
	},
	'password':{
		'required' : 'password name is required'
	}
};

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
  	
  	this.loginForm=this.formBuilder.group({
	  	userName: ['',[Validators.required]],
	  	password: ['',[Validators.required]],
	  	inputUserName:['',[Validators.required]]
	  });
	  
	  //this.route.paramMap.subscribe(params => {
    	//this.id = params.get("id");
  	  //})
  	  
  }
  
  onSubmit():void{
	alert('ok login form');
	alert(this.loginForm.controls.userName.value);
  	console.log('Login Data: in OnSubmit method');
  }
  
  onSubmitForgotPassword():void{
  	alert('onSubmitForgotPassword()'+this.loginForm.controls.inputUserName.value);
  }

}
