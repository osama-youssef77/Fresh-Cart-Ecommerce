import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  //login guard
  if(localStorage.getItem('userToken')!=null){
    return true;
  }else{
    let _Router=inject(Router);
    _Router.navigate(['./login']);

    return false;

  }
};
