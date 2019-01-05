import { Injectable, Inject } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { API } from "../../config/api.config";
import { HttpFactoryService } from "../../@common/services/http-factory.service";
import { HTTP_SERVICE } from "../../app.provider";
import { SEC_RES } from "../../config/security.config";
import { AuthStorageService } from "./auth-storage.service";

@Injectable()
export class AuthTokenService {

    constructor(@Inject(HTTP_SERVICE)private httpBaseService:HttpFactoryService, 
                private router: Router,
                private storage: AuthStorageService){}

    public login(username: string, password: string){
        this.storage.clear();
        this.httpBaseService.
        HTTP_REQUEST(API["auth"]["token"], this.getAuthBody(username,password).toString(), this.getAuthHeader()).
        subscribe((response:Response)=>{
            this.storage.loginStorage(response);
            this.router.navigate(["/app/dashboard"]);
        })
    }

    public logout(){
        this.storage.logout();
        this.router.navigate(["/auth"]);
    }

    public isLogin():boolean {
        return this.storage.isLogin();
    }

    private getAuthHeader(): HttpHeaders{
        return new HttpHeaders({
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic "+btoa(SEC_RES["client_id"] + ":" +SEC_RES["client_secret"]),
            "Accept": "application/json"
        });
    }

    private getAuthBody(username:string, password:string): URLSearchParams{
        const body = new URLSearchParams();
        body.append("client_id", SEC_RES["client_id"]);
        body.append("grant_type", SEC_RES["grant_type"]);
        body.append("username", username);
        body.append("password", password);
        return body;
    }

}