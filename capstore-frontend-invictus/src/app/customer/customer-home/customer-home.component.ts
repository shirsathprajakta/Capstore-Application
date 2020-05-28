import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Customer} from 'src/app/models/customer.model';


import { $ } from 'protractor';
import { CustomerService } from '../CustomerService/customer.service';
@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {
  submitted:boolean=false;
  getcust:Customer = new Customer;

  constructor(private router:Router,private custservice:CustomerService) { }

  ngOnInit() {
  if(localStorage.role=="ROLE_MERCHANT")
  this.router.navigate(["/merchant"]);
    this.getuser()
  }

  public getuser(){
    this.custservice.getcustomerdetails(localStorage.token).subscribe(data=>{
        console.log(data);
        if(data!=null)
         this.getcust=data;
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
