import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Product } from '../../../../shared/interfaces/product';
import { CartService } from '../../../../shared/services/cart/cart.service';
import { HeaderComponent } from "../../header/header.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [HeaderComponent,ReactiveFormsModule,CurrencyPipe],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  private _CartService = inject(CartService);
  private _Router = inject(Router);
  products: WritableSignal<Product[]> = signal([]);
  total:WritableSignal<number> = signal(0);
  ngOnInit() {
   this._CartService.cartProduct.subscribe({
     next: (res)=> {
       this.products.set(res)
     }
   })
   this.total.set(this._CartService.totalPrice());
 
  }
  changeRadio($event:Event){
    document.querySelectorAll(".box").forEach((ele)=>{
      ele.classList.remove('active')
    })
    const ele = $event.currentTarget as HTMLElement;
    ele.classList.add('active');
    const input = ele.childNodes[0] as HTMLInputElement;
    input.checked = true;
  }
  bilingForm = new FormGroup({
    first: new FormControl(null, Validators.required),
    last: new FormControl(null, Validators.required),
    phone: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
  })
  shippingForm = new FormGroup({
    address: new FormControl(null, Validators.required),
    house: new FormControl(null, Validators.required),
    post: new FormControl(null, Validators.required),
    zip: new FormControl(null, Validators.required),
  })

  onSubmit(){
    if(this.bilingForm.valid && this.shippingForm.valid){
      console.log("Valid")
    }else{
      this.bilingForm.markAllAsTouched();
      this.shippingForm.markAllAsTouched();
    }
  }

}
