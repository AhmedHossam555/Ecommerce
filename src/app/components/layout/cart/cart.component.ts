import { Component, inject, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { CartService } from '../../../shared/services/cart/cart.service';
import { Product } from '../../../shared/interfaces/product';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  private _CartSevice = inject(CartService);
  cartNum: WritableSignal<number> = signal(0);
  CartProduct: Product[] = []
  ngOnInit() {
  this.CartProduct = this._CartSevice.cart;
  
  }
  removeProductFromCart(product:Product){
    this._CartSevice.removeProductFromCart(product);
  }
 

}
