
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DecodedService } from 'src/app/shared/services/decoded.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  //class constructor-------------------------------------
  constructor(private _AuthService:AuthService, private _Router:Router,
    private _DecodedService:DecodedService){}

  //global properities-------------------------------------
  //for form alert box
  errorMessage:string='';
  //for loader
  isLoading:boolean=false;

  // register form structure-------------------------------
  loginForm:FormGroup=new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  });

  //sending user data to api------------------------------------- 
  setlogin():void{
    

    if(this.loginForm.valid){

      this.isLoading=true;

      this._AuthService.loginApi(this.loginForm.value).subscribe({
        next:(Response)=>{


          if(Response.message=="success"){
            
            this.isLoading = false;
            localStorage.setItem('userToken',Response.token);


            this._Router.navigate(['./home']);
          }
        },
        error:(err: HttpErrorResponse)=>{
          
          this.isLoading = false;

          this.errorMessage=err.error.message;
        }
      })

    }
  
  };


}
