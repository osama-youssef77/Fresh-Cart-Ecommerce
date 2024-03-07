import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { product } from 'src/app/shared/interfaces/product';
import { CartServiceService } from 'src/app/shared/services/cart-service.service';
import { WishListService } from 'src/app/shared/services/wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  constructor(private _WishListService:WishListService,
    private _CartServiceService:CartServiceService,
    private _ToastrService:ToastrService){}

  //globla properities to store data
  wishlistProducts:product[]=[];


  //display wishlist data
  ngOnInit(): void {
      this._WishListService.getWishlistProduct().subscribe({
        next:(response)=>{
          this.wishlistProducts=response.data;
        },
        error:(err)=>{console.log(err)}
      })
  }

  //add product to cart form wishlist
  addCartProduct(productId:string):void{
    this._CartServiceService.postCartProduct(productId).subscribe({
      next:(response)=>{
        this._ToastrService.success(response.message , 'For Cart');

        this._CartServiceService.cartNumber.next(response.numOfCartItems)


      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  //delete product from wishlist
  removeProduct(id:string):void{
    this._WishListService.deleteWishlistProduct(id).subscribe({
      next:(response)=>{
        // filtering products
        let wishlistItems=response.data;
        let newProducts=this.wishlistProducts.filter((item)=>
        wishlistItems.includes(item._id));
        this.wishlistProducts=newProducts;

        //edit wishlist number due to delete
        this._WishListService.wishListNumber.next(response.data.length);
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }






}
