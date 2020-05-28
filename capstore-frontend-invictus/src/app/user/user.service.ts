import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router : Router,private httpClient: HttpClient) { }
  logOutUser() {
    if (localStorage.token != null) {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      this.router.navigate(['/user']);
    }
  }

  public generateToken(request) {
    return this.httpClient.post<string>("http://localhost:9009/authenticate", request, {  responseType: 'text' as 'json' });
  }

  registerNewUser(user: User) {
    return this.httpClient.post("http://localhost:9009/addUser", user,  { responseType: 'text' as 'json' });
  }

  forgotPassword(uname,securityQue,securityAns) {
    let forgotPassRequest={
       "username":uname,
       "securityQuestion":securityQue,
       "securityAnswer":securityAns
     }
     return this.httpClient.post<String>("http://localhost:9009/forgotPassword",forgotPassRequest, { responseType: 'text' as 'json' });
   }
 
 
   changePassword(token, oldPassword, newPassword){
     let tokenStr = 'Bearer ' + token;
     const headers = new HttpHeaders().set('Authorization', tokenStr);
     return this.httpClient.get("http://localhost:9009/changePassword/" +oldPassword+ "/" +newPassword,{headers, responseType: 'text' as 'json'} );
   }
}
