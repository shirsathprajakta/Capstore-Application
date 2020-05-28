import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, ValidatorFn, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { AlternatePhoneValidator, AlternateEmailValidator,  AddUserPasswordValidator } from '../shared/password.validator';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  addForm: FormGroup;
  submitted: boolean = false;
  username: string
  usernameErrorMessage: string;
  usernameFlag: boolean = false;
  phoneNo: string;
  phoneNoErrorMessage: string;
  phoneNoFlag: boolean = false;
  alternatePhoneNo: string;
  alternatePhoneNoErrorMessage: string;
  alternatePhoneNoFlag: boolean = false;
  alternateEmail: string;
  alternateEmailFlag: boolean = false;
  alternateEmailErrorMessage: string;

  user:User;

  securityQuestion=[
    "Your High School Best Friend? ",
     "Who was your childhood hero? ",
   "In what town or city did your parents meet? ",
     "In what town or city was your first full time job? ",
     "What is your spouse or partner's mother's maiden name? "
   ]

  constructor(private formBuilder:FormBuilder,private service:UserService,private router :Router) {

   }

  ngOnInit() {
    if(localStorage.token != null && localStorage.role!=null){
      if(localStorage.role == 'ROLE_CUSTOMER'){
       this.router.navigate(["/customer"]);
      }
      else if(localStorage.role == 'ROLE_MERCHANT'){
         this.router.navigate(["/merchant"]);

      }
    }
    
    this.addForm = this.formBuilder.group({
      name: ['', [Validators.required,this.customPatternValid({
        pattern: /^([^0-9]*)$/, msg: 'Numbers not Allowed..'}),
         Validators.pattern("^[0-9A-Z][0-9a-zA-Z]*(?: [0-9A-Z][0-9a-zA-Z]*){0,2}$")]],
      username: ['', [Validators.required,Validators.email]],
      phoneNo: ['', [Validators.required,  Validators.maxLength(10), Validators.minLength(10), Validators.pattern("[a-zA-Z6-9][A-Za-z0-9]*"), this.customPatternValid({
        pattern: /^([^a-b A-z]*)$/, msg: 'only numbers are expected'})]],
      alternatePhoneNo: ['', [Validators.required,  Validators.maxLength(10), Validators.minLength(10), Validators.pattern("[a-zA-Z6-9][A-Za-z0-9]*"), this.customPatternValid({
        pattern: /^([^a-b A-z]*)$/, msg: 'only numbers are expected'})]],
      alternateEmail: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required, Validators.pattern("[A-Z][a-z]{2,6}")]],
      role:['',Validators.required],
      password: ['', [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]],
      confirmPassword:['',Validators.required],
      securityQuestion:['',Validators.required],
      securityAnswer:['',Validators.required]
    },{ validators : [AddUserPasswordValidator,AlternatePhoneValidator,AlternateEmailValidator]})
  }


  public customPatternValid(config: any): ValidatorFn {
    return (control: FormControl) => {
      let regExp: RegExp = config.pattern;
      if (control.value && !control.value.match(regExp)) {
        return {
          invalidMsg: config.msg
        };
      }
      else {
        return null;
      }
    };
  }


  addCustomer()
  {
    this.submitted=true;
    if(this.addForm.invalid)
    return;
    console.log(this.addForm.value)


    this.service.registerNewUser(this.addForm.value).subscribe(data => {
      alert(data);
      this.router.navigate(['user/login']);

    }, err => {
      console.log(err.error);

    })

  }
  
}
