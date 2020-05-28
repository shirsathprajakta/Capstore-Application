import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AdminService } from '../services/admin.service';
import { Customer } from 'src/app/models/customer.model';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  chart = [];

  date = ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7"];
  totalRevenue = [4000, 2000, 3000, 7000, 2500, 4250, 6000];
  noOfOrders = [4, 6, 10, 7, 12, 3, 8];
  category = ["Category1", "Category2", "Category3", "Category4"];
  categoryOrders = [5, 2, 7, 8,];
  males: number = 0;
  females: number = 0;
  customers: Customer[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {

    this.adminService.getListOfCustomers().subscribe(data => {
      this.customers = data;
      for (let i = 0; i < this.customers.length; i++) {
        console.log(this.customers[i].gender)
        if (this.customers[i].gender == 'M') {
          this.males = this.males + 1;
        }
        else {
          this.females += 1;
        }
      }
      this.chart = new Chart('genderChart', {
        type: 'doughnut',
        data: {
          labels: ['Male', 'Female'],
          datasets: [
            {
              label: 'Gender wise Customer',
              backgroundColor: ['orange', 'green'],
              borderColor: ['orange', 'green'],
              data: [this.males, this.females],
              fill: true,
            }
          ]
        }
      })
    })
    this.chart = new Chart('revenueChart', {
      type: 'line',
      data: {
        labels: this.date,
        datasets: [
          {
            label: 'Total Revenue (in INR) - Last 7 Days',
            backgroundColor: '#66bb6a',
            borderColor: '#66bb6a',
            data: this.totalRevenue,
            fill: false,
          }
        ]
      }
    })

    this.chart = new Chart('ordersChart', {
      type: 'bar',
      data: {
        labels: this.date,
        datasets: [
          {
            label: 'No of Orders - Last 7 Days',
            backgroundColor: '#007bff',
            borderColor: 'green',
            data: this.noOfOrders,
            fill: false,
          }
        ]
      }
    })

    this.chart = new Chart('categoryChart', {
      type: 'pie',
      data: {
        labels: this.category,
        datasets: [
          {
            label: 'Category Wise Orders',
            backgroundColor: ['#878BB6', '#4ACAB4', '#FF8153', '#FFEA88'],
            borderColor: ['#878BB6', '#4ACAB4', '#FF8153', '#FFEA88'],
            data: this.categoryOrders,
            fill: true,
          }
        ]
      }
    })

}
}