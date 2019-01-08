import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthTokenService } from './auth-token.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private router: Router, private authTokenService:AuthTokenService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.authTokenService.isLogin()){
            return true;
        }
        this.router.navigate(['/auth'])
        return false;
    }

}