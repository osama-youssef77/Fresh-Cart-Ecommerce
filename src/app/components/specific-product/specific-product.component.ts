import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { product } from 'src/app/shared/interfaces/product';
import { CartServiceService } from 'src/app/shared/services/cart-service.service';
import { EcomApiService } from 'src/app/shared/services/ecom-api.service';
import { WishListService } from 'src/app/shared/services/wish-list.service';

@Component({
  selector: 'app-specific-product',
  templateUrl: './specific-product.component.html',
  styleUrls: ['./specific-product.component.css']
})
export class SpecificProductComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute
    , private _EcomApiService:EcomApiService,
    private _CartServiceService:CartServiceService,
    private _WishListService:WishListService,
    private _ToastrService:ToastrService){}

  //globale variables
  specificProduct:product={} as product

  //getting the the id parameter from routing
  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(params)=>{
          let productId:any = params.get('id');
          //getting data from api
          this._EcomApiService.getSpecificProduct(productId).subscribe({
            next:(Response)=>{

              this.specificProduct=Response.data;
            },
            error:(err)=>{
              console.log(err);
            }
          })
        }
      })
  }

  //add product to cart
  addCartProduct(productId:string){
    this._CartServiceService.postCartProduct(productId).subscribe({
      next:(response)=>{
        this._ToastrService.success(response.message , 'For Cart');

          
        //cartnumber logic
        this._CartServiceService.cartNumber.next(response.numOfCartItems)
      
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  
  //add data to wishlist
  addWishlistProduct(productId:string):void{
    this._WishListService.postWishlistProduct(productId).subscribe({
      next:(response)=>{
        this._ToastrService.success(response.message , 'For WishList');

        
        //wish list number logice
        this._WishListService.wishListNumber.next(response.data.length);
        
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }










}
