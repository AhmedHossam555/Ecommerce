import { CurrencyPipe } from '@angular/common';
import { AfterViewInit, Component, inject, Input, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WishlistService } from '../../../shared/services/wishList/wishlist.service';
import { Product } from '../../../shared/interfaces/product';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent{
  private _WishlistService = inject(WishlistService);
  isWish:WritableSignal<boolean> = signal(false);
  @Input({required: true}) product:any;
  ngOnInit() {
  this.filter();
  }
  filter(){
    const productWish:any[] =  JSON.parse(window.localStorage.getItem('wishlist') || '');
    let val =  productWish.some((prod)=>prod.id === this.product.id);
    this.isWish.update((old)=> old = val);
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

}
