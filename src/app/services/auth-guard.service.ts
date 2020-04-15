import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router) { }

  canActivate(route, state:RouterStateSnapshot){
    let access_token=localStorage.getItem('access_token');
    if(access_token){
      if(state.url=="/" || state.url=="/login" || state.url=="/sign-up"){
        this.router.navigate(['/home']);
      }
      return true;
    }
    console.log(state.url);
    if(state.url!="/" && state.url!="/login" && state.url!="/sign-up"){
      this.router.navigate(['/login'],{queryParams:{"returnUrl":state.url}})
      return false;
    }
    return true;
  }
}
