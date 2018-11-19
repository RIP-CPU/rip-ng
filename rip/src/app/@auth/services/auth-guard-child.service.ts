import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthTokenService } from "./auth-token.service";

@Injectable()
export class AuthGuardChildService implements CanActivateChild {
    constructor(private router: Router, private authTokenService:AuthTokenService){}

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.authTokenService.isLogin()){
            return true;
        }
        this.router.navigate(['/auth'])
        return false;
    }

}