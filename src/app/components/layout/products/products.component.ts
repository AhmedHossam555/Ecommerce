import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Product } from '../../../shared/interfaces/product';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../../../shared/services/product/product.service';
import { FilterPipe } from '../../../shared/pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ InfiniteScrollDirective,  ProductComponent, FilterPipe,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  sortValue:string = 'default';
  
 
  products: WritableSignal<Product[]> = signal([]);
  private _ProductService = inject(ProductService);

  ngOnInit(): void {
    this.getALlProduct();
  }
  onScroll(){
    this.products.update((val)=> [...val,...val])
  }

  getALlProduct(){
    this._ProductService.getProduct().subscribe({
      next: (res)=>{
        this.products.set(res);
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }
}
