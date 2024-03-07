import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private _HttpClient:HttpClient) { }

  //global properities
  headerInfo:any={token:localStorage.getItem('userToken')};

  //posting product to cart
  postCartProduct(productId:string):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart',{
      productId:productId,
    },
    {
      headers:this.headerInfo,
    })
  }

  //getting data to display in cart comp
  getCartProduct():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart',{
      headers:this.headerInfo,
    })
  }

  //delet specific product
  deleteProduct(proId:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${proId}`,{
      headers:this.headerInfo
    })
  }

  //update cart products
  updateCartProduct(proCount:number, proId:string):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${proId}`,{
      count: proCount,
    },
    {
      headers:this.headerInfo,
    })
  }

  //deleteing all cart products
  deleteAllProducts():Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{
      headers:this.headerInfo,
    });
  }

  //cart num logic
  cartNumber:BehaviorSubject<any>=new BehaviorSubject(0);







}
