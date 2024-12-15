import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { WishlistService } from '../../../../shared/services/wishList/wishlist.service';
import { Product } from '../../../../shared/interfaces/product';
import { CurrencyPipe } from '@angular/common';
import { UserService } from '../../../../shared/services/user/user.service';
import { CartService } from '../../../../shared/services/cart/cart.service';
import { HotToastService } from '@ngneat/hot-toast';
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [HeaderComponent, RouterLink, RouterLinkActive, CurrencyPipe, FooterComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit{
  private _WishlistService = inject(WishlistService);
  private _CartService = inject(CartService);
  private _UserService = inject(UserService);
  private _toast = inject(HotToastService);
  wishlistProduct: WritableSignal<Product[]> = signal([]);
  ngOnInit(): void {
    this._WishlistService.wishlist.subscribe({
      next: (res)=>{
        this.wishlistProduct.update((val)=> val= res);
      }
    })
  }
  addProductToCart(product:Product){
    this._toast.success('Product added to cart successfully',{
      position:'top-left'
    })
    this._CartService.addProductToCart({
      ...product,
      quantity: 1
    })
  }
  addProductToWishlist(product:Product){
    this._toast.success('Product added to wishlist successfully',{
      position:'top-left'
    })
    this._WishlistService.addToWishList(product);
  }
  Logout(){
    this._UserService.clearSession();
  }

}
