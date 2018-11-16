import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthTokenService } from "./auth-token.service";

@Injectable()
export class UnauthorizeGuardService implements CanActivate {
    constructor(private router: Router, private authTokenService:AuthTokenService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.authTokenService.isLogin()){
            this.router.navigate(['/'])
            return false;
        }
        return true;
    }

}