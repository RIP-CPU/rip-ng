import { Injectable, Inject, LOCALE_ID } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { API } from "../../config/api.config";
import { HttpFactoryService } from "../../@common/services/http-factory.service";
import { HTTP_SERVICE } from "../../app.provider";
import { SEC_RES } from "../../config/security.config";
import * as CryptoJS from 'crypto-js';
import { formatDate } from "@angular/common";

@Injectable()
export class AuthTokenService {

    constructor(@Inject(HTTP_SERVICE)private httpBaseService:HttpFactoryService, private router: Router){}

    public login(username: string, password: string){
        this.httpBaseService.
        HTTP_REQUEST(API["auth"]["token"], this.getAuthBody(username,password).toString(), this.getAuthHeader()).
        subscribe((response:Response)=>{
            var key = this.getHmacSha256(SEC_RES["secret"], this.getKeyDate("access_token"));
            console.log(key);
            localStorage.setItem(key, response["access_token"]);
            this.router.navigate(["/app/dashboard"]);
        })
    }

    public getKeyDate(key:string): string {
        return key + formatDate(new Date(), "dd/MM/yyyy", "en-US");
    }

    public getHmacSha256(secret:string, message:string, enc?:string): string {
        var hash = CryptoJS.HmacSHA256(message, secret); 
        if(enc == "Hex")
            return CryptoJS.enc.Hex.stringify(hash);
        return CryptoJS.enc.Base64.stringify(hash);
    }

    public logout(){
        var key = this.getHmacSha256(SEC_RES["secret"], this.getKeyDate("access_token"));
        localStorage.removeItem(key);
        this.router.navigate(["/auth"]);
    }

    public isLogin():boolean{
        var key = this.getHmacSha256(SEC_RES["secret"], this.getKeyDate("access_token"));  
        if(localStorage.getItem(key))
            return true;
        return false;
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
        body.append("client_secret", SEC_RES["client_secret"]);
        body.append("grant_type", SEC_RES["grant_type"]);
        body.append("username", username);
        body.append("password", password);
        return body;
    }
}