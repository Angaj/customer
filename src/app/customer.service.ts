import { Injectable } from '@angular/core';
import {Customer} from './customer';
import {CUSTOMER} from './mock-customer'; 

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }


  getCustomer(): Customer[] {
    
      return CUSTOMER;
  }
}
