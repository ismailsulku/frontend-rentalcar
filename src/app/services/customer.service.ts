import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl="https://localhost:44341/api/customers/getall"

  constructor(private httpClient: HttpClient) {
  }

  getCustomers(): Observable<ListResponseModel<Customer>> {
     return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl);
  }

  getCustomerByEmail(email: string): Observable<SingleResponseModel<Customer>> {
     let emailPath = this.apiUrl + 'get-by-email?email=' + email;
     return this.httpClient.get<SingleResponseModel<Customer>>(emailPath);
  }

  update(customer: Customer): Observable<ResponseModel> {
     return this.httpClient.put<ResponseModel>(this.apiUrl, customer);
  }
}
