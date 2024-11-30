import { Component, inject, signal, WritableSignal } from '@angular/core';
import { CartService } from '../../../../shared/services/cart/cart.service';
import { HeaderComponent } from "../../header/header.component";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [HeaderComponent,CurrencyPipe],
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss'
})
export class SuccessComponent {
  private _CartService = inject(CartService);
  total: WritableSignal<number> = signal(0);
  ngOnInit() {
    this.total.set( this._CartService.totalPrice());
  }
}
