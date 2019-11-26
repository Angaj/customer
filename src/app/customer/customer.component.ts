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

  public show:boolean = false;
  public buttonName:any = 'inactive';
  
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show){ 
      this.buttonName = "active";
       
    }
    else
      this.buttonName = "inactive";
  }
}