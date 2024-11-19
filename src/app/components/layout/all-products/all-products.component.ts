import { Component } from '@angular/core';
import { MainLayoutComponent } from "../main-layout/main-layout.component";
import { HeaderComponent } from "../header/header.component";
import { ProductsComponent } from "../products/products.component";
import {SkeletonComponent} from "../skeleton/skeleton.component"

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [MainLayoutComponent, HeaderComponent, ProductsComponent,SkeletonComponent],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent {
}
