import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //class constructor
  constructor(private _HttpClient:HttpClient, private _Router:Router) { }

  //register form api
  registerApi(userData:object):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userData);
  }

  //login observale api
  loginApi(userData:object):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',userData);
  }

  //lougout service
  logout():void{
    //deleting usertoken
    localStorage.removeItem('userToken');
    //programming routing to login page
    this._Router.navigate(['./login']);
  }


}
