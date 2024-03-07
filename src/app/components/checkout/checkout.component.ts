import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/shared/services/payment.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  constructor(private _ActivatedRoute:ActivatedRoute,
    private _PaymentService:PaymentService){}

  //globale variables
  cartId:string|null='';

  // creating the form

  detailsForm:FormGroup=new FormGroup({
    details:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city:new FormControl('',[Validators.required])
  });

    //getting the the id parameter from routing
    ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(params)=>{
          this.cartId = params.get('id');
          //getting data from api
        }
      })
  };

  payment():void{
    this._PaymentService.checkOut(this.cartId,this.detailsForm.value).subscribe({
      next:(response)=>{
        // console.log(response);
        if(response.status=="success"){
          window.open(response.session.url,'_self')
        }
      }
    })
  }

  //posting the info to the api











}
