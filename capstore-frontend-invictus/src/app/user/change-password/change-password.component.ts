import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from '../shared/password.validator';
import { UserService } from '../user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm : FormGroup;
  submitted : boolean = false;
  errorMessage = '';
  constructor(private formBuilder: FormBuilder,
     private router: Router, private service: UserService,private location : Location) { }

  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      oldPassword:['',Validators.required],
      newPassword: ['', [Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]],
      confirmPassword: ['', Validators.required]
    },{ validators : PasswordValidator});
  }


  cancel(){
    this.location.back();
  }

  verifyAndChangePassword(){
    this.submitted = true;
    if(this.changePasswordForm.invalid)
    return;
    let oldPassword = this.changePasswordForm.controls.oldPassword.value;
    let newPassword = this.changePasswordForm.controls.newPassword.value;

    this.service.changePassword(localStorage.token, oldPassword, newPassword).subscribe(data=>{
      if(data=="true"){
        alert(`Password Changed Successfully...!`);
        if(localStorage.role=="ROLE_CUSTOMER")
        this.router.navigate(['/customer']);
        else
        this.router.navigate(['/merchant']);
      }else{
        alert("Enter correct current password")
      }
    },err=>{
      console.log(err)
      if(err.error=="Session Expired"){
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        alert("Session Expired....Login Again");
      this.router.navigate(["/user/login"])
      }
      
    });
    
    
  }

}
