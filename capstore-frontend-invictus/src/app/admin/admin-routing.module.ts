import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ViewCustomersComponent } from './view-customers/view-customers.component';
import { OrdersComponent } from './orders/orders.component';
import { CategoryComponent } from './category/category.component';
import { MinimumOrderValueComponent } from './minimum-order-value/minimum-order-value.component';

import { AddMerchantComponent } from './add-merchant/add-merchant.component';
import { InviteMerchantComponent } from './invite-merchant/invite-merchant.component';
import { InvitesComponent } from './invites/invites.component';
import { AllMerchantComponent } from './all-merchant/all-merchant.component';




const routes: Routes = [
  {path:'',component:DashboardComponent,children:[
   /*
    Write the same routing required here inside.
    For Example: 
    { path :'addCustomer' , component: AddCustomerComponent }
   
   */
  { path :'home' , component: AdminHomeComponent },
  { path :'stats' , component: StatisticsComponent },
  {path:'orders',component:OrdersComponent},

  {path:'addMerchant',component:AddMerchantComponent},
  {path:'viewCustomers',component:ViewCustomersComponent},
  {path:'minOrderValue',component:MinimumOrderValueComponent},
  {path:'category',component:CategoryComponent},
  {path:'send-invite',component:InviteMerchantComponent},
  {path:'invites',component:InvitesComponent},
  {path:'all-merchant',component:AllMerchantComponent},

  {path:'viewCustomers',component:ViewCustomersComponent},
  {path:'minOrderValue',component:MinimumOrderValueComponent},
  {path:'category',component:CategoryComponent},

  { path :'**' , component: AdminHomeComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
