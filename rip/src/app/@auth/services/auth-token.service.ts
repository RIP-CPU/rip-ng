import { Injectable, Inject } from "@angular/core";
import { ConstantModel } from "../../test/latihan/service/app-constant.model";
import { HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { API } from "../../config/api.config";
import { HttpFactoryService } from "../../@common/services/http-factory.service";
import { HTTP_SERVICE } from "../../app.provider";
import { SEC_RES } from "../../config/security.config";

@Injectable()
export class AuthTokenService {
    
    private constant: ConstantModel = new ConstantModel();

    constructor(@Inject(HTTP_SERVICE)private httpBaseService:HttpFactoryService, private router: Router){}

    public login(username: string, password: string){
        this.httpBaseService.
        HTTP_REQUEST(API["auth"]["token"], this.getAuthBody(username,password).toString(), this.getAuthHeader()).
        subscribe((response:Response)=>{
            localStorage.setItem("access_token",response["access_token"]);
            this.router.navigate(["/"]);
        })
    }

    public logout(){
        localStorage.removeItem("access_token")
        this.router.navigate(["/auth"]);
    }

    public isLogin():boolean{
        if(localStorage.getItem("access_token"))
            return true;
        return false;
    }

    private getAuthHeader(): HttpHeaders{
        return new HttpHeaders({
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic "+btoa(this.constant.client_id + ":" +this.constant.client_secret),
            "Accept": "application/json"
        });
    }

    private getAuthBody(username:string, password:string): URLSearchParams{
        const body = new URLSearchParams();
        body.append("client_id", SEC_RES["client_id"]);
        body.append("client_secret", SEC_RES["client_secret"]);
        body.append("grant_type", SEC_RES["grant_type"]);
        body.append("username", username);
        body.append("password", password);
        return body;
    }
}