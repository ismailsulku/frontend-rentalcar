import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetails } from '../models/carDetails';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  
   private apiUrl: string = 'https://localhost:44341/api/cars/';

   constructor(private httpClient: HttpClient) {
   }

   getCarDetail(): Observable<ListResponseModel<CarDetails>> {
      let newPath: string = this.apiUrl + 'get-details';
      return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
   }

   getCarById(id: number): Observable<SingleResponseModel<Car>> {
      let newPath: string = this.apiUrl + 'get-by-id?id=' + id;
      return this.httpClient.get<SingleResponseModel<Car>>(newPath);
   }

   add(car: Car): Observable<ResponseModel> {
      return this.httpClient.post<ResponseModel>(this.apiUrl, car);
   }

   update(car: Car): Observable<ResponseModel> {
      return this.httpClient.put<ResponseModel>(this.apiUrl, car);
   }
}
