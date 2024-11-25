import { isPlatformBrowser } from '@angular/common';
import { Product } from './../../interfaces/product';
import { inject, Injectable,PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService  {
  private _plat = inject(PLATFORM_ID);
  cartNum = new BehaviorSubject<number>(0);
  cart:Product[] = isPlatformBrowser(this._plat)? JSON.parse(window.localStorage.getItem('cart') || '[]'): [];
  constructor(){
     this.cartNum.next(this.cart.length);
     this.totalPrice();
  }
  addProductToCart(product:Product){
    this.cart.push(product)
    const uniqueArray = this.cart.filter(
      (ele,index,arr)=> index === arr.findIndex((obj)=> obj.id === ele.id)
      )
    this.cart = uniqueArray;
    this.cartNum.next(this.cart.length);

    window.localStorage.setItem('cart',JSON.stringify(this.cart));
  }
  updateProduct(product:Product){
    this.cart.forEach((ele,index)=>{
      if(ele.id === product.id){
        this.cart.splice(index,1,product);
      }
    })
    window.localStorage.setItem('cart',JSON.stringify(this.cart));
  }
  removeProductFromCart(product:Product){
     this.cart.map((ele:any,index:number)=>{
      if(product.id == ele.id){
        this.cart.splice(index,1);
      }
    });
     this.cartNum.next(this.cart.length);

    window.localStorage.setItem('cart',JSON.stringify(this.cart));
  }
  totalPrice():number{
    let sum=0;
    this.cart.forEach((ele)=>{
      sum+= ele.quantity! * ele.price;
    })
    return sum;
  }
}
