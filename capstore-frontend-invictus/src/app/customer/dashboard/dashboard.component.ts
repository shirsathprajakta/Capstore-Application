import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  todaysDate = new Date();

  constructor(private userService: UserService) {  setInterval(() => {
    this.todaysDate = new Date();
  }, 1000);
}

  ngOnInit() {
  }

  logout(){
    this.userService.logOutUser();
  }

}
