import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router, private auth:AuthService){}
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    if(!this.auth.isUserLoggedIn())
    {
      console.log(false);
      this.router.navigate([""]);
      return false;
    }
    return true;
  }
}
