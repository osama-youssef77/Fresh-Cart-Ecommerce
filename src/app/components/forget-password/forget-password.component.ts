import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgetPasswordService } from 'src/app/shared/services/forget-password.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

  constructor(private _ForgetPasswordService:ForgetPasswordService,
    private _Router:Router){}

  //global properities
  step1:boolean=true;
  step2:boolean=false;
  step3:boolean=false;

  isLoading:boolean=false;

  message1:string='';

  message2:string='';

  message3:string='';



  //form
  forgetPasswordForm:FormGroup=new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
  });

  //form
  verifyForm:FormGroup=new FormGroup({
    resetCode:new FormControl('',[Validators.required])
  });

  //form
  resetForm:FormGroup=new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    newPassword:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]),
  });

  // --functions ------------------------------------------
  //forget password logic
  forgetPassword(){
    
    this._ForgetPasswordService.forgetPasswordApi(this.forgetPasswordForm.value).subscribe({
      next:(response)=>{
        this.message1=response.message;
        this.step1=false;
        this.step2=true;
      },
      error:(err)=>{
        this.message1=err.error.message
      }
    })

  }

  //verify password logic
  verifyPassword(){
    this._ForgetPasswordService.verifyPasswordApi(this.verifyForm.value).subscribe({
      next:(response)=>{
        this.message2=response.status;
        this.step2=false;
        this.step3=true;
      },
      error:(err)=>{
        this.message2=err.error.message
      }
    })
  }


  //verify password logic
  resetPassword(){
    this._ForgetPasswordService.resetPasswordApi(this.resetForm.value).subscribe({
      next:(response)=>{
        this._Router.navigate(['./home'])
      },
      error:(err)=>{
        this.message3=err.error.message
      }
    })
  }





  //reset password logic
  // setlogin(){}
}
