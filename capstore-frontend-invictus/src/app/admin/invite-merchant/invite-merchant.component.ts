import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-invite-merchant',
  templateUrl: './invite-merchant.component.html',
  styleUrls: ['./invite-merchant.component.css']
})
export class InviteMerchantComponent implements OnInit {

  invitation:FormGroup;
  messageLength:number = 0;
  constructor(private builder:FormBuilder) { }

  ngOnInit() {
    this.invitation = this.builder.group({
      header:['',[Validators.required,Validators.maxLength(255)]],
      message:['',[Validators.required,Validators.maxLength(255)]]
    });
  }
  sendInvite(){
    // console.log(this.invitation.controls['message'].value.length);
  }
  messageEvent(){
    this.messageLength = this.invitation.controls['message'].value.length;
    console.log('ff')
  }
}
