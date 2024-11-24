import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Product } from './../../interfaces/product';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private _plat = inject(PLATFORM_ID);
  wishlistNum
  wishListProd:Product[]  = isPlatformBrowser(this._plat) ? JSON.parse(window.localStorage.getItem('wishlist') || '[]'): [];
  constructor() { }
  addToWishList(product:Product){
   this.wishListProd.push(product);
   window.localStorage.setItem('wishlist',JSON.stringify(this.wishListProd));
  }
  removeFromWishList(product:Product){
    this.wishListProd.map((ele,index)=>{
      if(ele.id === product.id){
        this.wishListProd.splice(index,1);
      }
    })
    window.localStorage.setItem('wishlist',JSON.stringify(this.wishListProd));
  
  }
}
