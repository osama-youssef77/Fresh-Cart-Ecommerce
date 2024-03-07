import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Finalorder } from 'src/app/shared/interfaces/finalorder';
import { DecodedService } from 'src/app/shared/services/decoded.service';
import { PaymentService } from 'src/app/shared/services/payment.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit {

  constructor(private _DecodedService:DecodedService,
    private _PaymentService:PaymentService, private _Router:Router){}

  userId:string='';

  finalOrder:Finalorder={} as Finalorder;

  //getting the user id 

  ngOnInit(): void {

      let userInfo = this._DecodedService.getUserInfo();

      this.userId=userInfo.id;

      //the api
      this._PaymentService.getUserOrders(this.userId).subscribe({
        next:(response)=>{
          this.finalOrder =response.pop();
        },
        error:(err)=>{
          console.log(err);
        }
      })
      
  }

  //go home 
  goHome():void{
    this._Router.navigate(["./home"])
  }

  
  

}
