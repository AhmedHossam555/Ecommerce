import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { WishlistService } from '../../../../shared/services/wishList/wishlist.service';
import { Product } from '../../../../shared/interfaces/product';
import { CurrencyPipe } from '@angular/common';
import { UserService } from '../../../../shared/services/user/user.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [HeaderComponent,RouterLink, RouterLinkActive, CurrencyPipe],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit{
  private _WishlistService = inject(WishlistService);
  private _UserService = inject(UserService);
  wishlistProduct: WritableSignal<Product[]> = signal([]);

  ngOnInit(): void {
    this._WishlistService.wishlist.subscribe({
      next: (res)=>{
        console.log(res)
        this.wishlistProduct.update((val)=> val= res);
      }
    })
  }
  Logout(){
    this._UserService.userInformation.next(null);
    window.localStorage.removeItem('token');
  }

}
