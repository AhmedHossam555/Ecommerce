import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/interfaces/product';
import { CurrencyPipe } from '@angular/common';
import { WishlistService } from '../../../shared/services/wishList/wishlist.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe],
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
  addToWishList(event:Event,product:Product){
    const icon = event.target as HTMLElement;
    const parent = icon.parentElement as HTMLElement;
     if(parent.classList.contains('fav')){
      parent.classList.remove('fav');
      this._WishlistService.removeFromWishList(product);
    }else{
      parent.classList.add('fav');
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
