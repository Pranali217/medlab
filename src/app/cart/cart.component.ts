import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  cartItems:any;
  orderObj:Order=new Order();
  
  constructor(private router:Router,private cart:CartService) { }

  ngOnInit(): void {
    this.getProductsFromLocalStorage();
    this.setCartItems();
    this.setOrderDetails();
  }

  setOrderDetails(){
    this.orderObj.orderId = this.generateRandomNumber();
    this.orderObj.products = this.setCartItems();
    this.calculateTotalPrice();
  }

  calculateTotalPrice(){
    this.orderObj.totalAmount = 0 ;
    this.orderObj.totalDiscount = 20 ;
    this.orderObj.products.forEach((item)=>{
      this.orderObj.totalAmount += Number(item.totalAmount);
    });

    this.orderObj.finalAmount = this.orderObj.totalAmount - this.orderObj.totalDiscount; 

  }

  setCartItems() {
    var productList: any = []
    this.cartItems.forEach((item: any) => {
      var productObj = new Product();
      productObj.description = item.description;
      productObj.actualPrice = item.actualPrice;
      productObj.brand = item.brand;
      productObj.drugCode = item.drugCode;
      productObj.discountPrice = item.discountPrice;
      productObj.quantity = 1 ;
      productObj.totalAmount = (item.discountPrice *  productObj.quantity);
      productObj.type = item.type;
      productList.push(productObj);
    });
    return productList;
  }

  getProductsFromLocalStorage(){
    var products:any ;
    products = localStorage.getItem("products");
    if(!products){
     this.cartItems = [];
    }else {
      this.cartItems = JSON.parse(products);
    }
  }

  generateRandomNumber(){
   return Math.floor(100000 + Math.random() * 900000);
  }
  quantityChange(type: string, index: number) {
    var selectProduct = this.orderObj.products[index];
    if (type == 'Positive') {
      ++selectProduct.quantity;
    } else {
      --selectProduct.quantity;
      if (selectProduct.quantity < 1) {
        var isConfirm = confirm("Are you sure");
        if (isConfirm) {
          this.orderObj.products.splice(index, 1);
        }else {
          ++selectProduct.quantity
        }
      }
    }
    selectProduct.totalAmount = selectProduct.quantity * selectProduct.discountPrice;
    this.calculateTotalPrice();
  }

  checkout() {
    this.cart.setOrder(this.orderObj);
    this.router.navigate(['/booking-details'])
  }

}



export class Order {
  orderId!:number;
  fullName!:string;
  totalAmount!:number;
  totalDiscount!: number;
  mobileNo!:number;
  emailId!:string;
  totalitems!:number;
  finalAmount!:number;
  deliveryType!:string;
  oAddress:Address=new Address();
  products:Product[]=[];
}

export class Address {
  city!:string;
  pincode!:number;
  state!:string;
  line1!:string;
  line2!:string;
}

export class Product {
  drugCode!:number;
  totalAmount!:number;
  actualPrice!:number;
  discountPrice!:number;
  description!:string;
  quantity!:number;
  brand!:string;
  type!:string;

}
