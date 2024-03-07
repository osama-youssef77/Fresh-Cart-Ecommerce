import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private _HttpClient:HttpClient) { }

  //getting userToken
  headerInfo:any={token:localStorage.getItem('userToken')};

  //posting payment request to api (online payment)
  checkOut(cartId:string|null, detailsForm:object):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,{
      shippingAddress: detailsForm,
    },
    {
      headers:this.headerInfo,
    })
  }

  //getting user orders
  getUserOrders(id:string):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
  }





}
