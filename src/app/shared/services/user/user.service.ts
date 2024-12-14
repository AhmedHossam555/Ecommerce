import { HttpClient } from '@angular/common/http';
import { afterNextRender, inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import { Enviroment } from '../../Enviroment/enviroment';
import { Login } from '../../interfaces/login';
import { Register } from '../../interfaces/register';
import { jwtDecode } from 'jwt-decode';
export interface TokenPayload {
  exp: number;
  iat: number;
  [key: string]: any; // Include other claims if necessary
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _HttpClient = inject(HttpClient);
  private refreshTokenTimeOut:any;
  private token:string | null = null;
  userInformation = new BehaviorSubject<any>(null);

  ngOnInit() {
    this.userToken();
  }
  login(loginForm:Login):Observable<any>{
    return this._HttpClient.post(`${Enviroment.baseUrl}/auth/login`,loginForm)
  }
  register(registerForm:Register):Observable<any> {
    return this._HttpClient.post(`${Enviroment.baseUrl}/users/`,registerForm)
  }
  loadToken(){
    this.token = JSON.stringify(window.localStorage.getItem('token'));
    if(this.token){
      this.decodedToken(this.token);

    }

  }
  private decodedToken(token:string){
    try{
      const decoded:TokenPayload = jwtDecode(token);
      const isTokenExpired =  decoded.exp && (Date.now() >= decoded.exp * 1000);
      if(isTokenExpired){
        console.log("token is expired");
        this.clearSession()
      }else{
        this.userInformation.next(decoded);
      }
    }catch(error){
      console.log("Invalid token",error);
      this.clearSession();

    }

  }
  LoginForm(loginForm:Login):Observable<any>{
    return this._HttpClient.post(`${Enviroment.baseUrl}/auth/login`,loginForm).pipe(
      switchMap((response:any)=>{
        this.storeToken(response.access_token, response.refresh_token);
        this.decodedToken(response.access_token);

        return of(response);
      })
    )
  }
  private clearSession(){

  }
  storeToken(accessToken:string,refreshToken:string){
    window.localStorage.setItem('access_token', accessToken );
    window.localStorage.setItem('refresh_token', refreshToken);
    this.token = accessToken;
  }
  userToken(){
    if(window.localStorage.getItem('token')){
      const token = JSON.stringify(window.localStorage.getItem('token'));
      const decoded = jwtDecode(token);
      console.log(decoded);
      this.userInformation.next(decoded);
    }
  
  }
  getProfile():Observable<any>{
    return this._HttpClient.get(`${Enviroment.baseUrl}/auth/profile`,{
      headers:{
        "Authorization": `Bearer ${window.localStorage.getItem('token')!}`,
      }
    })
  }

}
