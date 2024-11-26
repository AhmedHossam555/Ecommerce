import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Product } from './../../interfaces/product';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private _plat = inject(PLATFORM_ID);
  wishlist = new BehaviorSubject<Product[]>([]);
  wishlistNum = new BehaviorSubject<number>(0);
  wishListProd:Product[]  = isPlatformBrowser(this._plat) ? JSON.parse(window.localStorage.getItem('wishlist') || '[]'): [];
  constructor() { 
    this.wishlistNum.next(this.wishListProd.length);
    if(isPlatformBrowser(this._plat)){
      this.wishlist.next(JSON.parse(window.localStorage.getItem('wishlist') || '[]'));
    }
  }
  addToWishList(product:Product){
   this.wishListProd.push(product);
   const uniqueArray = this.wishListProd.filter(
    (ele,index,arr)=> index === arr.findIndex((obj)=> obj.id === ele.id)
    )
   this.wishListProd = uniqueArray;
   window.localStorage.setItem('wishlist',JSON.stringify(this.wishListProd));
   this.wishlistNum.next(this.wishListProd.length);
   this.wishlist.next(JSON.parse(window.localStorage.getItem('wishlist') || '[]'));
  }
  removeFromWishList(product:Product){
    this.wishListProd.map((ele,index)=>{
      if(ele.id === product.id){
        this.wishListProd.splice(index,1);
      }
    })
    this.wishlistNum.next(this.wishListProd.length);
    window.localStorage.setItem('wishlist',JSON.stringify(this.wishListProd));
    this.wishlist.next(JSON.parse(window.localStorage.getItem('wishlist') || '[]'));
  }
}
