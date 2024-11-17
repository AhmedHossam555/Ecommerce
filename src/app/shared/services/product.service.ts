import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviroment } from '../Enviroment/enviroment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private _HttpClient:HttpClient) { }
  getProduct():Observable<any>{
    return this._HttpClient.get(`${Enviroment.baseUrl}/products?offset=0&limit=30`);
  }
}
