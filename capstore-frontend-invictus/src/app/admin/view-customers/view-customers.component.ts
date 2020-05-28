import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {

  searchText:string;
  view:boolean=true;
  pp=[];
  cc=[];
  customers:any;
  constructor() { }

  ngOnInit() {
    this.cc.push(1);
    this.cc.push(2);
    this.pp.push(1);
    this.pp.push(1);
    this.pp.push(2);
    this.pp.push(3);
    this.pp.push(4);
    this.pp.push(2);
    this.pp.push(3);
    this.pp.push(4);
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
  deleteCustomer()
  {
    console.log("customerUsername");
  }
  viewAddress()
  {
    console.log("Address")
  }
  deleteAddress()
  {
    console.log("delete address")
  }
}
