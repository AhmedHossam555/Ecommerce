import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviroment } from '../Enviroment/enviroment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  limit: WritableSignal<number> = signal(30)
  constructor(private _HttpClient:HttpClient) { }
  getProduct():Observable<any>{
    return this._HttpClient.get(`${Enviroment.baseUrl}/products?offset=0&limit=${this.limit()}`);
  }
}
