import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InviteService } from '../services/invite.service';
import { Merchant } from '../models/merchant.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-all-merchant',
  templateUrl: './all-merchant.component.html',
  styleUrls: ['./all-merchant.component.css']
})
export class AllMerchantComponent implements OnInit {

  merchants:Merchant[] = [];
  constructor(private router:Router,private inviteService:InviteService) { }
  ngOnInit() {
    this.inviteService.getMerchants().subscribe(merchants=>{
      this.merchants = merchants;
      
    },(err:HttpErrorResponse)=>{
      if(err.status == 0){
        this.router.navigate(['error']);
      }
    })
  }

}
