import { Component, inject, signal, WritableSignal } from '@angular/core';
import { CartService } from '../../../../shared/services/cart/cart.service';
import { HeaderComponent } from "../../header/header.component";
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [HeaderComponent,CurrencyPipe,DatePipe],
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss'
})
export class SuccessComponent {
  private _CartService = inject(CartService);
  total: WritableSignal<number> = signal(0);
  Data: WritableSignal<any> = signal({})
 
  ngOnInit() {
    this.total.set( this._CartService.totalPrice());
    this.Data.update((val) => val = new Date());
  }
}
