import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { product } from 'src/app/shared/interfaces/product';
import { CartServiceService } from 'src/app/shared/services/cart-service.service';
import { EcomApiService } from 'src/app/shared/services/ecom-api.service';
import { WishListService } from 'src/app/shared/services/wish-list.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  constructor(private _EcomApiService:EcomApiService, private _CartServiceService:CartServiceService,
    private _WishListService:WishListService,
    private _ToastrService:ToastrService){}

  //global properities
  homeProducts:product[]=[];

  searchTerm:string='';

  //getting data from api
  ngOnInit(): void {
      this._EcomApiService.getAllProducts().subscribe({
        next:(Response)=>{
          this.homeProducts=Response.data;
        },

        error:(err)=>{
          console.log(err);
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
