import { Component, inject, signal, WritableSignal } from '@angular/core';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { CartService } from '../../../shared/services/cart/cart.service';
import { Product } from '../../../shared/interfaces/product';

@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.scss'
})
export class CheckOutComponent {
 private _CartService = inject(CartService);
 products: WritableSignal<Product[]> = signal([])
 ngOnInit() {
  this._CartService.cartProduct.subscribe({
    next: (res)=> {
      console.log(res)
    }
  })
 }
}
