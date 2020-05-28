import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../CustomerService/customer.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
    if(localStorage.role=="ROLE_MERCHANT")
  this.router.navigate(["/merchant"]);

    this.addForm = this.formBuilder.group({
      addressLineOne: ['', Validators.required],
      addressLineTwo: ['', Validators.required],
      district: ['', Validators.required],
      state: ['', Validators.required],
      landmark: ['', Validators.required]
    });
  }
  addAddress() {
    this.submitted = true;

    if (this.addForm.invalid) {
      return;
    }
    console.log(this.addForm.value);
    this.customerService.addAddress(this.addForm.value, localStorage.token).subscribe(data => {
      console.log(data);
      alert(`you've added address sucessfully`);
      this.router.navigate(['customer/manage-address']);
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
