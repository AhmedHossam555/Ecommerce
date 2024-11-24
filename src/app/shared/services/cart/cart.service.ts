import { isPlatformBrowser } from '@angular/common';
import { Product } from './../../interfaces/product';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _plat = inject(PLATFORM_ID);
  cart:Product[] = isPlatformBrowser(this._plat)? JSON.parse(window.localStorage.getItem('cart') || '[]'): [];
  addProductToCart(product:Product){
    this.cart.push(product)
    const uniqueArray = this.cart.filter(
      (ele,index,arr)=> index === arr.findIndex((obj)=> obj.id === ele.id)
      )
    this.cart = uniqueArray;
    window.localStorage.setItem('cart',JSON.stringify(this.cart));
  }
  removeProductFromCart(product:Product){
     this.cart.map((ele:any,index:number)=>{
      if(product.id == ele.id){
        this.cart.splice(index,1);
      }
    });
    window.localStorage.setItem('cart',JSON.stringify(this.cart));
  }
}
