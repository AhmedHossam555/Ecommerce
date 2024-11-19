import { Component, inject, OnInit, Input, signal, WritableSignal } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/interfaces/product';
import { CurrencyPipe } from '@angular/common';
import { WishlistService } from '../../../shared/services/wishList/wishlist.service';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe,InfiniteScrollDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
 

  products: WritableSignal<Product[]> = signal([]);
  private _ProductService = inject(ProductService);
  private _WishlistService = inject(WishlistService);
  ngOnInit(): void {
    this.getALlProduct();
  }
  onScroll(){
    this.products.update((val)=> [...val,...val])
  }
  addToWishList(event:Event,product:Product){
    const icon = event.currentTarget as HTMLElement;
     if(icon.classList.contains('fav')){
      icon.classList.remove('fav');
      this._WishlistService.removeFromWishList(product);
    }else{
      icon.classList.add('fav');
      this._WishlistService.addToWishList(product);
    }
  }
  getALlProduct(){
    this._ProductService.getProduct().subscribe({
      next: (res)=>{
        console.log(res);
        this.products.set(res);
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }
}
