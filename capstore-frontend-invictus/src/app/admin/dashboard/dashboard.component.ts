import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   todaysDate = new Date();

  constructor() {
    setInterval(() => {
      this.todaysDate = new Date();
    }, 1000);
  }

  ngOnInit() {
  }

}
