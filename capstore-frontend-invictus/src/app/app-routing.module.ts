import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';


const routes: Routes = [
  { path: 'admin', loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule) },
  { path: 'customer', loadChildren:()=>import('./customer/customer.module').then(m=>m.CustomerModule)},
  { path: 'home', component:HomeComponent},
  { path: 'merchant', loadChildren:()=>import('./merchant/merchant.module').then(m=>m.MerchantModule)},
  { path: 'user', loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  {path:'error',component:ServerErrorComponent},
  { path: '', redirectTo :'/user/login',pathMatch:'full'},
  { path: '**' , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
