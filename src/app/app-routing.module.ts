import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './employee/list-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{path: 'list', component: ListEmployeeComponent },
	{path: 'create', component: CreateEmployeeComponent },
	{path: 'edit', component: EditEmployeeComponent },
	{path: 'login', component: LoginComponent },
	{path: '', redirectTo:'/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
