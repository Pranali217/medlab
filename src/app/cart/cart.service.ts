import { Injectable } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  orderObj: any;
  constructor(private shared:SharedService) { }

  addSelectItemToCart(product:any){
    var products:any;
    products = localStorage.getItem("products");
    products = JSON.parse(products);
    if(!products){
      products = [];
    }
    products.push(product);
    console.log('produts',products);
    console.log('string',JSON.stringify(products));
    localStorage.setItem("products",JSON.stringify(products));
    this.shared.emitSelProduct.next(products.length);
  }

  setOrder(order:any){
    this.orderObj = order;
  }

  getOrder(){
    return this.orderObj ;
  }

  removeProductsFromLocalStorage(){
    localStorage.removeItem('products');
  }
}
