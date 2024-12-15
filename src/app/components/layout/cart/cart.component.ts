import { Component, inject, signal, WritableSignal } from '@angular/core';
import { CartService } from '../../../shared/services/cart/cart.service';
import { Product } from '../../../shared/interfaces/product';
import { CurrencyPipe } from '@angular/common';
import { HotToastService } from '@ngneat/hot-toast';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  private _CartSevice = inject(CartService);
  private _toast = inject(HotToastService);
  cartNum: WritableSignal<number> = signal(0);
  CartProduct:WritableSignal<Product[]> = signal([]);
  total:WritableSignal<number> = signal(0);
  constructor(){
    this._CartSevice.total.subscribe({
      next: (res)=>{
        this.total.update((val)=> val = res);
      }
    })
  }
  ngOnInit() {
  this._CartSevice.cartNum.subscribe({
    next: (res)=>{
      this.cartNum.set(res);
    }
  });
  this._CartSevice.cartProduct.subscribe({
    next:(res)=>{
      this.CartProduct.update((val)=> val= res)
    }
  })
  this._CartSevice.total.subscribe({
    next: (res)=>{
      this.total.update((val)=> val = res);
    }
  })
  }
  removeProductFromCart(product:Product){
    this._toast.error('Product removed from cart',{
      position: 'top-left',
     });
    this._CartSevice.removeProductFromCart(product);
  }
  updateQuantity(value: number, product: Product, operator:string){
    if(value === 0){
      this._CartSevice.removeProductFromCart(product)
    }
    if(operator == '+'){
      value++;
    }else{
      value--;
    }
    this._CartSevice.updateProduct({
      ...product,
      quantity: value,
    })
  }
  }
 


