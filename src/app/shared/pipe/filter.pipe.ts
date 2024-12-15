import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'filterSort',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[],value:string | any): any {
    if(value == 'default'){
      return products;
    }
    if(value == "lowtohigh"){
      return products.sort((a,b)=> a.price - b.price)
    }
    if(value == "hightolow"){
      return products.sort((a,b)=> b.price - a.price)
    }
    if(value == 'atoz'){
      return products.sort((a,b)=>a.title.localeCompare(b.title))
    }
    if(value == 'ztoa'){
      return products.sort((a,b)=>b.title.localeCompare(a.title))
    }
    return [];
  }

}
