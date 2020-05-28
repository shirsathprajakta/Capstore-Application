import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { OrdersComponent } from './orders/orders.component';
import { MerchantHomeComponent } from './merchant-home/merchant-home.component';
import { StatisticsComponent } from '../admin/statistics/statistics.component';
import { MerchantStatisticsComponent } from './merchant-statistics/merchant-statistics.component';


const routes: Routes = [
  {path:'',component:DashboardComponent,children:[
    /*
    Write the same routing required here inside.
    For Example: 
    { path :'addCustomer' , component: AddCustomerComponent }
   
   */
    {path:'inventory', component:InventoryComponent},
    {path:'orders', component:OrdersComponent},
    {path:'statistics', component:MerchantStatisticsComponent},
    {path:'**', component:MerchantHomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule { }
