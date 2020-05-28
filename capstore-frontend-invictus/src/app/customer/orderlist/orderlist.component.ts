import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/orders.model';
import { Router } from '@angular/router';
import { CustomerService } from '../CustomerService/customer.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  orders:Order []= []
  order1:Order = {
    address:null,
    customer: null,
    orderAmount: null,
    orderDate: null,
    orderId: 0,
    orderStatus: null,
    product: null,
    quantity: 0,
    statusDate: null,
    transaction:null
    }
  // constructor(private orderservice:OrderslistService) { }
  searchText:string;
  view:boolean=true;
  

  constructor(private customerService : CustomerService,private router:Router){

  }
  ngOnInit() {
    if(localStorage.role=="ROLE_MERCHANT")
  this.router.navigate(["/merchant"]);
     console.log("In OnInit Block")
    this.customerService.getMyOrders(localStorage.token).subscribe(data=>{
      
      this.orders=data.sort((a,b)=>(b.orderId) - (a.orderId));

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

    console.log(this.orders)
  }

  orderStatus(order:Order){
    console.log(order)
    this.order1 = order;
  }

  toggleViewList(){
    this.view=false;
    console.log(this.view)
  }
  toggleViewCard()
  {
    this.view=true;
    console.log(this.view)
  }
  viewDetails(order:Order)
  {
    this.customerService.saveOrder(order);
    this.router.navigate(['customer/return']);
  }
  
}
