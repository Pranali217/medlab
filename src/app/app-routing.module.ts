import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingDetailsComponent } from './cart/booking-details/booking-details.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmOrderComponent } from './cart/confirm-order/confirm-order.component';
import { HomeComponent } from './components/home/home.component';
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ViewProductDetailsCategoryComponent } from './components/view-product-details-category/view-product-details-category.component';
import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';



const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'medicines',component:MedicineHomeComponent},
  {path:'view-product-details/:drug-code', component:ViewProductDetailsComponent},
   {path:'view-top-details-by-category',component:ViewProductDetailsCategoryComponent},
   {path:'cart' , component:CartComponent},
   {path:'booking-details' , component:BookingDetailsComponent},
   {path: 'confirm-order', component:ConfirmOrderComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
