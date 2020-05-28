import { Component, OnInit } from '@angular/core';
import { InviteService } from '../services/invite.service';
import { Invitation } from '../models/invitation.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Merchant } from '../models/merchant.model';

@Component({
  selector: 'app-invites',
  templateUrl: './invites.component.html',
  styleUrls: ['./invites.component.css']
})
export class InvitesComponent implements OnInit {

  invitations:Invitation[] = [];
  merchant:Merchant;
  constructor(private inviteService:InviteService,private router:Router) { }

  ngOnInit() {
    this.inviteService.getInvites().subscribe(invites=>{
      this.invitations = invites;
    },
    (err:HttpErrorResponse)=>{
      if(err.status == 0)
        this.router.navigate(['error']);
    })
  }
  setMerchant(merchant){
    this.merchant = merchant;
  }
}
