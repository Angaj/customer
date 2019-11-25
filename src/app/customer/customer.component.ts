import { Component, OnInit } from '@angular/core';
import {CUSTOMER} from '../mock-customer';
import {Customer} from '../customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer = CUSTOMER;
  selectedCustomer: Customer;
  clicked = false;

  constructor() { }

  ngOnInit() {
  }


  status: boolean = false;
clickEvent(){
    this.status = !this.status;       
}

}
