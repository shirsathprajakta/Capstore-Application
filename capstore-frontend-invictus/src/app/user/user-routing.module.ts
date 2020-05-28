import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormGroup } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';


const routes: Routes = [
  {path:'',component:DashboardComponent,children:[
  {path:'login',component:LoginComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'addUser',component:AddCustomerComponent},
  {path:'changePassword', component:ChangePasswordComponent},
  {path:'',redirectTo:'/user/login',pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { 
  addForm: FormGroup
  submitted: boolean = false;
  username: string


}
