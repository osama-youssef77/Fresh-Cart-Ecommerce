import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { product } from 'src/app/shared/interfaces/product';
import { CartServiceService } from 'src/app/shared/services/cart-service.service';
import { EcomApiService } from 'src/app/shared/services/ecom-api.service';
import { WishListService } from 'src/app/shared/services/wish-list.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Categories } from 'src/app/shared/interfaces/categories';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _EcomApiService:EcomApiService, private _CartServiceService:CartServiceService,
    private _WishListService:WishListService,
    private _ToastrService:ToastrService){}

//global properities
  homeProducts:product[]=[];

  homeCategories:Categories[]=[]

  searchTerm:string='';

  // -----------------carousels custom options
  //for categories slider
  mainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    navText: ['<<', '>>'],
    items:1,
    nav: true
  }

  categoriesSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    navText: ['<<', '>>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }

  //getting data from api
  ngOnInit(): void {

    //getting all categories for slider
    this._EcomApiService.getCategories().subscribe({
      next:(response)=>{
        this.homeCategories=response.data;
      }
    })

    //getting all products
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
  addCartProduct(productId:string):void{
    this._CartServiceService.postCartProduct(productId).subscribe({
      next:(response)=>{
        //toastr message for adding products to cart
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
  addWishlistProduct(productId:string,):void{
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
