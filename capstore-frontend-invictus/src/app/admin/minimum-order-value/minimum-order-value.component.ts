import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-minimum-order-value',
  templateUrl: './minimum-order-value.component.html',
  styleUrls: ['./minimum-order-value.component.css']
})
export class MinimumOrderValueComponent implements OnInit {

  money=500
  submitted:boolean=false
  minOrderAmountForm:FormGroup
  constructor(private formBuilder:FormBuilder) { }
  
  ngOnInit() {
    this.minOrderAmountForm=this.formBuilder.group({
      amount:['',Validators.required]
    })
  }
  updateAmount()
  {this.submitted=true;
    if(this.minOrderAmountForm.invalid)
    return
    console.log("amount updated")
  }


}
