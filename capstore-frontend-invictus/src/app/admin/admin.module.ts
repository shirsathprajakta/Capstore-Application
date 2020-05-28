import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { OrdersComponent } from './orders/orders.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ViewCustomersComponent } from './view-customers/view-customers.component';
import { CategoryComponent } from './category/category.component';
import { MinimumOrderValueComponent } from './minimum-order-value/minimum-order-value.component';

import { AddMerchantComponent } from './add-merchant/add-merchant.component';
import { AllMerchantComponent } from './all-merchant/all-merchant.component';
import { InviteMerchantComponent } from './invite-merchant/invite-merchant.component';
import { MerchantOrdersComponent } from './merchant-orders/merchant-orders.component';
import { MerchantFeedbacksComponent } from './merchant-feedbacks/merchant-feedbacks.component';
import { MerchantProductsComponent } from './merchant-products/merchant-products.component';
import { AllFeedbacksComponent } from './all-feedbacks/all-feedbacks.component';

import { HttpClientModule} from '@angular/common/http';
import { InvitesComponent } from './invites/invites.component';


@NgModule({
  declarations: [
    DashboardComponent, 
    AdminHomeComponent, 
    StatisticsComponent, 
    OrdersComponent,
    ViewCustomersComponent, 
    CategoryComponent, 
    MinimumOrderValueComponent, 
    AllMerchantComponent, 
    InviteMerchantComponent, 
    MerchantOrdersComponent, 
    MerchantFeedbacksComponent, 
    MerchantProductsComponent, 
    AllFeedbacksComponent,
    AddMerchantComponent,
    InvitesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ]
})
export class AdminModule { }
