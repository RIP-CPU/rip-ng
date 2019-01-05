import { Injectable, Inject } from "@angular/core";
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
        this.clearStorage();
        this.httpBaseService.
        HTTP_REQUEST(API["auth"]["token"], this.getAuthBody(username,password).toString(), this.getAuthHeader()).
        subscribe((response:Response)=>{
            let accessTokenKey = this.getHmacSha256(SEC_RES["private_key"], this.getKeyDate("access_token"), true);
            let refreshTokenKey = this.getHmacSha256(SEC_RES["private_key"], this.getKeyDate("refresh_token"), true);
            let publicKey = this.getHmacSha256(SEC_RES["private_key"], this.getKeyDate("xrkey"), true);
            let expiresInKey = this.getHmacSha256(SEC_RES["private_key"], this.getKeyDate("expires_in"), true);
            let authorityKey = this.getHmacSha256(SEC_RES["private_key"], this.getKeyDate("authority"), true);
            let emailKey = this.getHmacSha256(SEC_RES["private_key"], this.getKeyDate("email"), true);
            let menusKey = this.getHmacSha256(SEC_RES["private_key"], this.getKeyDate("menus"), true);
            let serverDateKey = this.getHmacSha256(SEC_RES["private_key"], this.getKeyDate("server_date"), true);
            let localeKey = this.getHmacSha256(SEC_RES["private_key"], this.getKeyDate("menus"), true);
            let fullnameKey = this.getHmacSha256(SEC_RES["private_key"], this.getKeyDate("name"), true);
            sessionStorage.setItem(accessTokenKey, response["access_token"]);
            sessionStorage.setItem(refreshTokenKey, response["refresh_token"]);
            sessionStorage.setItem(publicKey, response["xrkey"]);
            sessionStorage.setItem(expiresInKey, response["expires_in"]);
            sessionStorage.setItem(authorityKey, response["authority"]);
            sessionStorage.setItem(emailKey, response["email"]);
            sessionStorage.setItem(menusKey, response["menus"]);
            sessionStorage.setItem(serverDateKey, response["server_date"]);
            localStorage.setItem(localeKey, response["locale"]);
            localStorage.setItem(fullnameKey, response["name"]);
            this.router.navigate(["/app/dashboard"]);
        })
    }

    public getKeyDate(key:string): string {
        return (key + formatDate(new Date(), "dd/MM/yyyy", "en-US"));
    }

    public getHmacSha256(secret:string, message:string, hex?:boolean): string {
        let hash = CryptoJS.HmacSHA256(message, secret); 
        if(hex)
            return CryptoJS.enc.Hex.stringify(hash).toUpperCase();
        return CryptoJS.enc.Base64.stringify(hash).toUpperCase();
    }

    public logout(){
        let accessTokenKey = this.getHmacSha256(SEC_RES["private_key"], this.getKeyDate("access_token"), true);
        sessionStorage.removeItem(accessTokenKey);
        this.router.navigate(["/auth"]);
    }

    public isLogin():boolean{
        let accessTokenKey = this.getHmacSha256(SEC_RES["private_key"], this.getKeyDate("access_token"), true);  
        if(sessionStorage.getItem(accessTokenKey)){
            return true;
        }
        this.clearStorage();
        return false;
    }

    public clearStorage(){
        sessionStorage.clear();
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