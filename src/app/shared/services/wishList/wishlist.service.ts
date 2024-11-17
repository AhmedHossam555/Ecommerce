import { Injectable, signal, WritableSignal } from '@angular/core';
import { Product } from './../../interfaces/product';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishListProd:Product[] = [];

  constructor() { }
  addToWishList(product:Product){
   this.wishListProd.push(product);
   console.log(this.wishListProd)
  }
  removeFromWishList(product:Product){
    this.wishListProd.map((ele,index)=>{
      if(ele.id === product.id){
        this.wishListProd.splice(index,1);
      }
    })

    console.log(this.wishListProd);
    console.log('remove');
  }
}
