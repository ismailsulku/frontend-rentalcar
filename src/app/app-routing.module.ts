import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { CarDetailsComponent } from './components/cardetails/cardetails.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CarComponent,
  },
  {
    path: 'brand',
    component: BrandComponent,
  },
  {
    path: 'car',
    component: CarComponent,
  },
  {
    path: 'color',
    component: ColorComponent,
  },
  {
    path: 'rental',
    component: RentalComponent,
  },
  {
    path: 'customer',
    component: CustomerComponent,
  },
  {
    path: 'cars/color/:colorId',
    component: CarDetailsComponent,
  },
  {
    path: 'cars/brand/:brandId',
    component: CarDetailsComponent,
  },
  {
    path: 'cars/details/:carId',
    component: CarDetailsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
