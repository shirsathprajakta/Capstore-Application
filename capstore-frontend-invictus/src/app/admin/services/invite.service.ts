import { Injectable } from '@angular/core';
import { Merchant } from '../models/merchant.model';
import { HttpClient } from '@angular/common/http';
import { Invitation } from '../models/invitation.model';

@Injectable({
  providedIn: 'root'
})
export class InviteService {

  private merchant:Merchant;
  constructor(private http:HttpClient) { }

  getMerchant(){
    return this.merchant;
  }

  setMerchant(merchant:Merchant){
    this.merchant = merchant;
  }

  getInvites(){
    return this.http.get<Invitation[]>('http://localhost:8080/admin/invites');
  }

  sendInvite(invitation:Invitation){
    return this.http.post('http://localhost:8080/admin/invite',invitation);
  }
  getMerchants(){
    return this.http.get<Merchant[]>('http://localhost:8080/merchants/all');
  }

}
