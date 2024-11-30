import { Component, inject, signal, WritableSignal } from '@angular/core';
import { CartService } from '../../../../shared/services/cart/cart.service';
import { HeaderComponent } from "../../header/header.component";
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { WishlistService } from '../../../../shared/services/wishList/wishlist.service';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [HeaderComponent,CurrencyPipe,DatePipe],
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss'
})
export class SuccessComponent {
  private _CartService = inject(CartService);
  private _WishlistService = inject(WishlistService);
  private _Router = inject(Router);
  total: WritableSignal<number> = signal(0);
  Data: WritableSignal<any> = signal({})
 
  ngOnInit() {
    this.total.set( this._CartService.totalPrice());
    this.Data.update((val) => val = new Date());
  }
  backToHome(){
    window.localStorage.removeItem('cart');
    window.localStorage.removeItem('wishlist');
    this._CartService.cartProduct.next([]);
    this._WishlistService.wishlist.next([]);
    this._CartService.cartNum.next(0);
    this._WishlistService.wishlistNum.next(0);
    this._Router.navigate(['/']);
  }
}
