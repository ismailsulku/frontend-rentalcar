import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../services/car.service';
import { CarDetails } from '../../../models/carDetails';
import { Router, ActivatedRoute } from '@angular/router';
import { CarImageService } from '../../../services/carimage.service';
import { CarImages } from '../../../models/carImages';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

   
   carImages: CarImages[] = [];
   imageBaseUrl = 'https://localhost:44341/';
   carDetails: CarDetails | undefined;
   

   constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private carService: CarService,
      private carImageService: CarImageService,
      private authService: AuthService
   ) {
   }

   ngOnInit(): void {
      this.activatedRoute.params.subscribe((params) => {
         if (params['carId']) {
            this.getPhotosByCarId(params['carId']);
            this.getCarDetailById(params['carId']);
         }
      });
   }

   getCarDetailById(id: number) {
      this.carService.getCarDetail().subscribe(response => {
         this.carDetails =  response.data.find(car => car.id == id);
      });
   }

   getPhotosByCarId(carId: number) {
      this.carImageService.getPhotosByCarId(carId).subscribe((response) => {
         this.carImages = response.data;
      });
   }

   getCurrentSliderImageClass(sliderImage: CarImages): string {
      if (this.carImages[0] === sliderImage) {
         return 'carousel-item active';
      }

      return 'carousel-item';
   }

   isAuthenticate(): boolean {
      return this.authService.isAuthenticated();
   }

}
