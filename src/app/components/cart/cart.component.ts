import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/shared/interfaces/product';
import { CartServiceService } from 'src/app/shared/services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _CartServiceService:CartServiceService,
    private _Router:Router){}

  //global properities
  cartProducts:any={};
  cartItemsNum:number=0;

  //getting data to display
  ngOnInit(): void {
      this._CartServiceService.getCartProduct().subscribe({
        next:(response)=>{
          this.cartProducts=response.data;
          this.cartItemsNum=response.numOfCartItems;
        },
        error:(err)=>{
          console.log(err);
        }
      })
  }

  //delete specific product
  deleteSpecificProduct(id:string):void{
    this._CartServiceService.deleteProduct(id).subscribe({
      next:(response)=>{
        this.cartProducts=response.data;
        this.cartItemsNum=response.numOfCartItems;

        //delete number from cart number
        this._CartServiceService.cartNumber.next(response.numOfCartItems);

      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  //update cart product
  editSpecificProduct(count:number,id:string):void{
    if(count>0){
      this._CartServiceService.updateCartProduct(count,id).subscribe({
        next:(response)=>{
          this.cartProducts=response.data;
  
        },
        error:(err)=>{
          console.log(err)
        }
      })
    }

  }

  //deleting all products
  removeAll():void{
    this._CartServiceService.deleteAllProducts().subscribe({
      next:(response)=>{
        this.cartProducts={};
        this.cartItemsNum=0;

        //make the cart number to be zero
        this._CartServiceService.cartNumber.next(0);
      },
    });
  }












}
