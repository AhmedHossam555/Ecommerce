import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ScrollDirective } from '../../../shared/directives/scroll.directive';
import { OverlayDirective } from '../../../shared/directives/overlay.directive';
import { CartService } from '../../../shared/services/cart/cart.service';
import { WishlistService } from '../../../shared/services/wishList/wishlist.service';
import { OverlayWishlistDirective } from '../../../shared/directives/overlay-wishlist.directive';
import { WishlistComponent } from "../wishlist/wishlist.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ScrollDirective, OverlayDirective, OverlayWishlistDirective, WishlistComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private _CartService = inject(CartService);
  private _WishlistService =inject(WishlistService);
  cartNum: WritableSignal<number> = signal(0);
  wishNum:WritableSignal<number> = signal(0);
  ngOnInit() {
    this._CartService.cartNum.subscribe({
      next: (res)=>{
        this.cartNum.set(res);
      }
    });
    this._WishlistService.wishlistNum.subscribe({
      next: (res)=>{
        this.wishNum.set(res);
      }
    })
  }
}

