import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from 'src/app/models/orders.model';
import { address } from 'src/app/models/address.model';
import { Customer } from 'src/app/models/customer.model';




@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  ShareOrder:Order={
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


  public saveOrder(order:Order){ //sumit
    this.ShareOrder= order;
  }
  public getOrder(){  //sumit
    return this.ShareOrder;
  }
  public getMyOrders(token){  //sumit
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get<Order[]>("http://localhost:9009/myorders",{headers});
  }
  public getStatus(token,orderId:number){ //sumit
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get<String>(`http://localhost:9009/getStatus/${orderId}`,{headers,responseType:'text' as 'json'});
  }
  public updateStatus(token,orderId:number,status:String){  //sumit
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get<Boolean>(`http://localhost:9009/updateStatus/${orderId}/${status}`,{headers});
  }
  addAddress(add:address,token) //sagar
  {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.post(`http://localhost:9009/addAddress`,add,{headers});
  }
  viewAddress(token){ //sagar
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get<address[]>(`http://localhost:9009/viewAddress`,{headers});
  }
  deleteAddress(addressId:number){  //sagar
    let tokenStr = 'Bearer ' + localStorage.token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get(`http://localhost:9009/deleteAddress/${addressId}`,{headers});
  }

  public getcustomerdetails(token) //prajakta
  {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get<Customer>(`http://localhost:9009/getUserDetails`,{headers});
  }

  public editUser(cust:Customer)//prajakta
  {
    let tokenStr = 'Bearer ' + localStorage.token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
   return this.http.put("http://localhost:9009/editUser",cust,{headers,responseType:'text'})
  }
}
