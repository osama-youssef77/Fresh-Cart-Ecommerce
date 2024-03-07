import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcomApiService {

  constructor(private _HttpClient:HttpClient) { }

  //observable for home & products comp
  getAllProducts():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/products');
  }

  //getting observale for categories comp
  getCategories():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories');
  }

  //getting observable for brands comp
  getBrands():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/brands');
  }

  //getting observable for specific poduct
  getSpecificProduct(proId:string):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${proId}`)

  }

}
