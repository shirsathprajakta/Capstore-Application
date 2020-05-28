import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router ,NavigationEnd} from '@angular/router';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
declare var $:any;

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  editForm:FormGroup;
  submitted:boolean=false;

  constructor(private formBuilder:FormBuilder,private router:Router) { 
  }

  ngOnInit() {
    this.editForm=this.formBuilder.group({
      status:['',Validators.required]
    });
  }

  updateStatus(){
    this.submitted=true;

    if(this.editForm.invalid){
      return;
    }

    alert("updated..!!");
    $(document).ready(function(){
      $('#exampleModalCenter').modal('toggle');

    })
    this.router.navigate(['admin/orders']);
  }
}