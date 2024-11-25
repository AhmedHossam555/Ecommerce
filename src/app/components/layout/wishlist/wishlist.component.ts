import { CurrencyPipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { Product } from '../../../shared/interfaces/product';


@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  wishList:WritableSignal<Product[]> = signal([]);

}
