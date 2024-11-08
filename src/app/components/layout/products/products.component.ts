import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { MainLayoutComponent } from "../main-layout/main-layout.component";
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/interfaces/product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HeaderComponent, MainLayoutComponent, CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products: WritableSignal<Product[]> = signal([]);
  private _ProductService = inject(ProductService);
  ngOnInit(): void {
    this.getALlProduct();
  }

  getALlProduct(){
    this._ProductService.getProduct().subscribe({
      next: (res)=>{
        console.log(res);
        this.products.set(res)
      }
    })
  }
}
