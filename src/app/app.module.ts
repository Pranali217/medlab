import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TopDealsComponent } from './components/top-deals/top-deals.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';
import { ViewProductDetailsCategoryComponent } from './components/view-product-details-category/view-product-details-category.component';
import { LoginModule } from './login/login.module';
import { CartModule } from './cart/cart.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    MedicineHomeComponent,
    TopDealsComponent,
    ViewProductDetailsComponent,
    ViewProductDetailsCategoryComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    HttpClientModule,
    LoginModule,
    CartModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
