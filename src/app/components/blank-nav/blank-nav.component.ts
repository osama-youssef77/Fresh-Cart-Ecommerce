import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartServiceService } from 'src/app/shared/services/cart-service.service';
import { WishListService } from 'src/app/shared/services/wish-list.service';

@Component({
  selector: 'app-blank-nav',
  templateUrl: './blank-nav.component.html',
  styleUrls: ['./blank-nav.component.css']
})
export class BlankNavComponent implements OnInit {

  constructor(private _AuthService:AuthService,
    private _CartServiceService:CartServiceService,
    private _WishListService:WishListService){}

  logoutUser(){
    this._AuthService.logout();
  }

  //cartnumber logic
  cartNumber:number=0;

  wishListNumber:number=0;


  ngOnInit(): void {

    //for cart number
      this._CartServiceService.cartNumber.subscribe({
        next:(data)=>{
          this.cartNumber=data;
        }
      })

      //permenant number of cart
      this._CartServiceService.getCartProduct().subscribe({
        next:(response)=>{
          if(response.status=='success'){
            this.cartNumber=response.numOfCartItems;

          }
        }
      })

      //for wishlist number
      this._WishListService.wishListNumber.subscribe({
        next:(wishes)=>{
          this.wishListNumber=wishes
        }
      })

      //for permenant
      this._WishListService.getWishlistProduct().subscribe({
        next:(response)=>{
          this.wishListNumber=response.count
        }
      })



  }


}
