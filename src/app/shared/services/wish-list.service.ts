import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(private _HttpClient:HttpClient) { }

  //global properities
  headerInfo:any={token:localStorage.getItem('userToken')};

  //posting a product to the wishlist
  postWishlistProduct(proId:string):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
      productId:proId,
    },{
      headers:this.headerInfo,
    })
  }

  //display wishlist products
  getWishlistProduct():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/wishlist',{
      headers:this.headerInfo,
    })
  }

  //remove product from wishList
  deleteWishlistProduct(proId:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${proId}`,{
      headers:this.headerInfo,
    })
  }

  //wishlist number logice
  wishListNumber:BehaviorSubject<any>=new BehaviorSubject(0);









}
