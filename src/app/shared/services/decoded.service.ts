import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class DecodedService {

  constructor() { }


  getUserInfo() :any{

    if(localStorage.getItem('userToken')!=null){
      let endcodeToken:any= localStorage.getItem('userToken');

      let decodeToken=jwtDecode(endcodeToken)

      return decodeToken;

    }

  }


}
