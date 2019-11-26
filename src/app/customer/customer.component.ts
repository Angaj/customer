import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  
  customer : Customer[];
  selectedCustomer: Customer;

  public show:boolean = false;
  public buttonName:any = 'inactive';
  
  constructor(private customerService: CustomerService) { }


  ngOnInit() {
    this.getCustomer();
  }

  onSelect(customer: Customer) : void{
    this.selectedCustomer= customer;
  }  

  getCustomer(): void{
   this.customer = this.customerService.getCustomer()
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