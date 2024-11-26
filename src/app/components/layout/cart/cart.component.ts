import { Component, inject, signal, WritableSignal } from '@angular/core';
import { CartService } from '../../../shared/services/cart/cart.service';
import { Product } from '../../../shared/interfaces/product';
import { CurrencyPipe } from '@angular/common';
import { HotToastService } from '@ngneat/hot-toast';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  private _CartSevice = inject(CartService);
  private _toast = inject(HotToastService);
  cartNum: WritableSignal<number> = signal(0);
  CartProduct: Product[] = [];
  total:WritableSignal<number> = signal(0);
  ngOnInit() {
  this.CartProduct = this._CartSevice.cart;
  this.total.update((val)=> val = this._CartSevice.totalPrice());
  this._CartSevice.cartNum.subscribe({
    next: (res)=>{
      this.cartNum.set(res);
    }
  });
 
  }
  removeProductFromCart(product:Product){
    this._toast.error('Product removed from cart',{
      position: 'top-left',
     });
    this._CartSevice.removeProductFromCart(product);
  }
  updateQuantity(value: number, product: Product, operator:string){
    if(operator == '+'){
      value++;
    }else{
      value--;
    }
    this._CartSevice.updateProduct({
      ...product,
      quantity: value,
    })
    this.total.update((val)=> val = this._CartSevice.totalPrice());
  }
  
  }
 


