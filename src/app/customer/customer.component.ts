import { Component, OnInit,ElementRef } from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  
  customer : Customer[];
  selectedCustomer: Customer;
  private elRef:ElementRef;
  public show:boolean = false;
  public buttonName:any = 'Inactive';
  statusText: string;
  isClicked: boolean;
  constructor(private customerService: CustomerService, private router : Router ) { }


  ngOnInit() {
    this.isClicked = false;
    this.getCustomer();
  }

  onSelect(customer: Customer) : void{
    this.selectedCustomer= customer;
    this.customer.forEach(custId => {
      if(custId.id === customer.id) {
        this.isClicked = true;
      }
    })
    
  }  

  getCustomer(): void{
   this.customer = this.customerService.getCustomer()
  }

  toggle(id) {
    let status = document.getElementById('status-'+id);
    this.statusText = status.innerText;
    // CHANGE THE NAME OF THE BUTTON.
    status.innerText = (this.statusText == 'Inactive') ? 'Active' : 'Inactive';
    //console.log(status.innerText)


    /*
    this.show = !this.show;
    if(this.show){ 
      this.buttonName = "active";
    }
    else
      this.buttonName = "inactive";
    */

  }
  onNav(){
    const value = this.router.navigate(['customer/customerdetail']);
    console.log(value);
  }
}