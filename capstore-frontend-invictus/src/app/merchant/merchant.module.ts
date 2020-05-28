import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantRoutingModule } from './merchant-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { OrdersComponent } from './orders/orders.component';
import { MerchantHomeComponent } from './merchant-home/merchant-home.component';
import { MerchantStatisticsComponent } from './merchant-statistics/merchant-statistics.component';


@NgModule({

  declarations: [
    DashboardComponent, 
    InventoryComponent, 
    OrdersComponent, 
    MerchantHomeComponent, 
    MerchantStatisticsComponent],

  imports: [
    CommonModule,
    MerchantRoutingModule]
})
export class MerchantModule { }
