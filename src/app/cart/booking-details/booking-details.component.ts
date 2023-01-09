import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/http/http.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {
  bookingForm!:FormGroup;
  finalOrder:any;
  constructor(private fb:FormBuilder,private cart:CartService,private http:HttpService,private router:Router) {
    this.finalOrder = this.cart.getOrder();
   }

  ngOnInit(): void {
    this.createForm();

  }

  createForm(){
    this.bookingForm = this.fb.group({
      'fullName':[''],
      'mobileNo':[''],
      'gender':[''],
      'dob':[''],
      'emailId':[''],
      'address':this.fb.group({
        'line1':[''],
        'line2':[''],
        'landmark':[''],
        'pincode':[''],
        'city':[''],
        'state':[] 
      }) 
    })
  }

  bookOrder(){
   console.log('form',this.bookingForm.value);
   var obj = this.bookingForm.value;
   
   var orderObj = {
    "orderId":this.finalOrder.orderId,
    "fullName":this.bookingForm.controls['fullName'].value,
    "totalAmount":this.finalOrder.totalAmount,
    "totalDiscount": this.finalOrder.totalDiscount,
    "mobileNo":this.bookingForm.controls['mobileNo'].value,
    "emailId":this.bookingForm.controls['emailId'].value,
    "totalitems":this.finalOrder.totalitems,
    "finalAmount":this.finalOrder.finalAmount,
    "gender":this.bookingForm.controls['gender'].value,
    "deliveryType":"Online",
    "oAddress":this.bookingForm.controls['address'].value,
    "products":this.finalOrder.products
   }
   this.http.postDetailsToServer('orders',orderObj).subscribe((response)=>{
    if(response){
      this.cart.removeProductsFromLocalStorage();
     this.router.navigate(['/confirm-order'])
    }
   })

  }

}