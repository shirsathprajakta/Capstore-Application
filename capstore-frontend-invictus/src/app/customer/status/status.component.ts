import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/orders.model';
import { CustomerService } from '../CustomerService/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  orders:Order []= []
  constructor(private customerService : CustomerService,private router:Router){  }

  ngOnInit() {
    if(localStorage.role=="ROLE_MERCHANT")
  this.router.navigate(["/merchant"]);
  }

  display(){
    console.log("In Display Block")
    this.customerService.getMyOrders(localStorage.token).subscribe(data=>{
      this.orders=data;
      console.log(this.orders);
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
