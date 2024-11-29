import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { ProductService } from '../../../shared/services/product/product.service'; 
import { Product } from '../../../shared/interfaces/product';
import { CurrencyPipe } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WishlistService } from '../../../shared/services/wishList/wishlist.service';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [HeaderComponent, RouterLink, CurrencyPipe, CarouselModule,RouterLink,NgxImageZoomModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  // carsoul
  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    center: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 4
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  custom2:OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 2
        },
        400: {
          items: 3
        },
        740: {
          items: 4
        },
        940: {
          items: 5
        }
      },
      nav: false,
  }
  selectedImage:string | null = null;
  updateMainImage(image:string): void{
    this.selectedImage = image;
  }
  /***********/
  private _WishlistService = inject(WishlistService);
  private _toast = inject(HotToastService);
  addToWishList(event:Event,product:Product){
    const icon = event.currentTarget as HTMLElement;
     if(icon.classList.contains('fav')){
      this._toast.error('Product removed from wishlist',{
        position: 'top-left',
      })
      icon.classList.remove('fav');
      this._WishlistService.removeFromWishList(product);
    }else{
      this._toast.success('Product added to wishlist successfully',{
        position: 'top-left',
      });
      icon.classList.add('fav');
      this._WishlistService.addToWishList(product);
    }
  }


  /****** */
  private _ProductService = inject(ProductService);
  id:WritableSignal<string> = signal('');
  product?:Product;
  CategorieProduct:WritableSignal<Product[]> = signal([]);
  constructor(private _ActivatedRoute:ActivatedRoute){
  }
  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe({
      next: (res)=>{
        this.id.set(res['id']);
      }
    })
    this.getProduct();
    setTimeout(()=>{
      this.getProductCategories();
    },200)
  }
  getProduct(){
    this._ProductService.getSingleProduct(this.id()).subscribe({
      next:(res)=>{
        this.product = res;
      }
    })
  }
  getProductCategories(){

    this._ProductService.getProductCategories(this.product?.category.id).subscribe({
      next:(res)=>{
        console.log(res)
        this.CategorieProduct.set(res);
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }

}
