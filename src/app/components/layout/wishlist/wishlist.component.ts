import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output, signal, WritableSignal } from '@angular/core';
import { Product } from '../../../shared/interfaces/product';
import { WishlistService } from '../../../shared/services/wishList/wishlist.service';
import { HotToastService } from '@ngneat/hot-toast';



@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit{

  private _wishlistService = inject(WishlistService);
  private _toast = inject(HotToastService);
  wishList:WritableSignal<Product[]> = signal([]);
  wishNum: WritableSignal<number> = signal(0);
  ngOnInit(): void {
    this._wishlistService.wishlist.subscribe({
      next: (res)=>{
        this.wishList.update((val)=> val = res);
      }
    })
    this._wishlistService.wishlistNum.subscribe({
      next: (res)=>{
        this.wishNum.update((val)=> val = res);
      }
    })
  }
  removeProductFromWishlist(product:Product){
    this._toast.error('Product removed from wishlist',{
      position: 'top-left',
     });
    this._wishlistService.removeFromWishList(product);
  }


}
