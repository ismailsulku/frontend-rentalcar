import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ColorComponent } from './components/color/color.component';
import { CarDetailsComponent } from './components/cardetails/cardetails.component';
import { CategoryComponent } from './components/category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    CarComponent,
    RentalComponent,
    NaviComponent,
    CustomerComponent,
    ColorComponent,
    CarDetailsComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
