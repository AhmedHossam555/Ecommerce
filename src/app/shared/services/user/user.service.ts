import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Enviroment } from '../../Enviroment/enviroment';
import { Login } from '../../interfaces/login';
import { Register } from '../../interfaces/register';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _HttpClient = inject(HttpClient);
  login(loginForm:Login):Observable<any>{
    return this._HttpClient.post(`${Enviroment.baseUrl}/auth/login`,loginForm)
  }
  register(registerForm:Register):Observable<any> {
    return this._HttpClient.post(`${Enviroment.baseUrl}/users/`,registerForm)
  }
  userInformation = new BehaviorSubject<any>(null);
  userToken(){
    const token = JSON.stringify(window.localStorage.getItem('token'));
    const decoded = jwtDecode(token);
    console.log(decoded);
    this.userInformation.next(decoded);
  }

}
