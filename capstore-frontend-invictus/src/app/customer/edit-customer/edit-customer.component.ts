import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl, ValidatorFn} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Customer} from 'src/app/models/customer.model';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from '../CustomerService/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  editProfileForm: FormGroup;
  submitted: boolean = false;


  constructor(private formBuilder: FormBuilder, private router: Router,private custservice:CustomerService) { }

  ngOnInit() {
    if(localStorage.role=="ROLE_MERCHANT")
  this.router.navigate(["/merchant"]);

    this.editProfileForm = this.formBuilder.group({
      username: [{ value: '', disabled: true }],
      name: [{ value: '', disabled: true }],
      //phoneNo: ['', Validators.required],
      phoneNo: ['',[ Validators.required,Validators.pattern("[6-9][0-9]{9}")]],
       alternatePhoneNo: ['',[ Validators.required,Validators.pattern("[6-9][0-9]{9}")]],
      alternateEmail: ['',[Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
      //alternatePhoneNo: ['', Validators.required],
     //alternateEmail: ['',Validators.required],
      gender: [{ value: '', disabled: true }],
      balance: [{ value: '', disabled: true }]
      
    });
    this.custservice.getcustomerdetails(localStorage.token).subscribe(data=>{
      if(data!=null)
      this.editProfileForm.setValue(data);
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

  editUser() 
  {
    this.submitted = true;

    if (this.editProfileForm.invalid) {
      return;
    }
    this.custservice.editUser(this.editProfileForm.getRawValue()).subscribe(data=>{
      alert(data);
      this.router.navigate(['/customer']);
      console.log(data);
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
