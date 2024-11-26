import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviroment } from '../../Enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _HttpClient = inject(HttpClient);
  login():Observable<any>{
    return this._HttpClient.post(`${Enviroment.baseUrl}/auth/login`,{})
  }
}
