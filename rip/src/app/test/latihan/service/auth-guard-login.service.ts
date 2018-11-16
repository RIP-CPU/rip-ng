import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthTokenService } from "./auth-token.service";

@Injectable()
export class AuthGuardLoginService implements CanActivate {
    constructor(private router: Router, private authTokenService:AuthTokenService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.authTokenService.isLogin()){
            this.router.navigate(['/test'])
            return false;
        }
        return true;
    }

}