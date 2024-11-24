import { CurrencyPipe, isPlatformBrowser } from '@angular/common';
import {   Component, inject, Input, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WishlistService } from '../../../shared/services/wishList/wishlist.service';
import { Product } from '../../../shared/interfaces/product';
import { HotToastService } from '@ngneat/hot-toast';
import { CartService } from '../../../shared/services/cart/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent{
  private _WishlistService = inject(WishlistService);
  private _CartService = inject(CartService);
  private _plat =inject(PLATFORM_ID);
  isWish:WritableSignal<boolean> = signal(false);
  @Input({required: true}) product:any;
  constructor(private toast: HotToastService) {}
  ngOnInit() {
    
      this.filter();

     
  }
  filter(){
    const productWish:any[] = isPlatformBrowser(this._plat)? JSON.parse(window.localStorage.getItem('wishlist') || '[]') : [];
    let val =  productWish.some((prod)=>prod.id === this.product.id);
    this.isWish.update((old)=> old = val);
  }
  addToWishList(event:Event,product:Product){
    const icon = event.currentTarget as HTMLElement;
     if(icon.classList.contains('fav')){
     this.toast.error('Product removed from wishlist',{
      position: 'top-left',
     });
      icon.classList.remove('fav');
      this._WishlistService.removeFromWishList(product);
    }else{
      this.toast.success('Product added to wishlist successfully',{
        position: 'top-left',
       });
      icon.classList.add('fav');
      this._WishlistService.addToWishList(product);
    }
  }

  addToCart(product:Product){
    this.toast.success('Product added to cart successfully',{
      position:'top-left',
    })
    this._CartService.addProductToCart(product);
  }
  

}
