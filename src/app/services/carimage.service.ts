import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImages } from '../models/carImages';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl="https://localhost:44341/api/carimages/"

  constructor(private httpClient: HttpClient) {
  }

  getPhotosByCarId(carId: number): Observable<ListResponseModel<CarImages>> {
     let newPath = this.apiUrl + 'get-list-by-carid?carId=' + carId;
     return this.httpClient.get<ListResponseModel<CarImages>>(newPath);
  }
  
}
