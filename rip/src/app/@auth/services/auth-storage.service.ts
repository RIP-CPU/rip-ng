import { Injectable } from "@angular/core";
import { EncryptionService } from "./encryption.service";
import { SEC_RES } from "../../config/security.config";

@Injectable()
export class AuthStorageService {

    constructor(private enc: EncryptionService){}

    public clear():void {
        sessionStorage.clear();
    }

    public loginStorage(response:Response):void {
        let accessTokenKey = this.enc.getHmacSha256(SEC_RES["private_key"], "access_token", true);
        let accessTokenValue = this.enc.encryptAES(SEC_RES["aes_key"], response["access_token"]);

        let refreshTokenKey = this.enc.getHmacSha256(SEC_RES["private_key"], "refresh_token", true);
        let refreshTokenValue = this.enc.encryptAES(SEC_RES["aes_key"], response["refresh_token"]);

        let publicKey = this.enc.getHmacSha256(SEC_RES["private_key"], "xrkey", true);
        let publicValue = this.enc.encryptAES(SEC_RES["aes_key"], response["xrkey"]);

        let expiresInKey = this.enc.getHmacSha256(SEC_RES["private_key"], "expires_in", true);
        let expiresInValue = this.enc.encryptAES(SEC_RES["aes_key"], JSON.stringify(response["expires_in"]));

        let authorityKey = this.enc.getHmacSha256(SEC_RES["private_key"], "authority", true);
        let authorityValue = this.enc.encryptAES(SEC_RES["aes_key"], JSON.stringify(response["authority"]));

        let emailKey = this.enc.getHmacSha256(SEC_RES["private_key"], "email", true);
        let emailValue = this.enc.encryptAES(SEC_RES["aes_key"], response["email"]);

        let menusKey = this.enc.getHmacSha256(SEC_RES["private_key"], "menus", true);
        let menusValue = this.enc.encryptAES(SEC_RES["aes_key"], JSON.stringify(response["menus"]));

        let serverDateKey = this.enc.getHmacSha256(SEC_RES["private_key"], "server_date", true);
        let serverDateValue = this.enc.encryptAES(SEC_RES["aes_key"], response["server_date"]);
        
        sessionStorage.setItem(accessTokenKey, accessTokenValue);
        sessionStorage.setItem(refreshTokenKey, refreshTokenValue);
        sessionStorage.setItem(publicKey, publicValue);
        sessionStorage.setItem(expiresInKey, expiresInValue);
        sessionStorage.setItem(authorityKey, authorityValue);
        sessionStorage.setItem(emailKey, emailValue);
        sessionStorage.setItem(menusKey, menusValue);
        sessionStorage.setItem(serverDateKey, serverDateValue);
        localStorage.setItem("locale", response["locale"]);
        localStorage.setItem("name", response["name"]);
    }

    public logout():void {
        let accessTokenKey = this.enc.getHmacSha256(SEC_RES["private_key"], "access_token", true);
        sessionStorage.removeItem(accessTokenKey);
    }

    public isLogin():boolean {
        let accessTokenKey = this.enc.getHmacSha256(SEC_RES["private_key"], "access_token", true);  
        if(sessionStorage.getItem(accessTokenKey))
            return true;
        sessionStorage.clear();
        return false;
    }

    public getSessionStorage(key:string):string {
        let keyEncrypted = this.enc.getHmacSha256(SEC_RES["private_key"], key, true);
        return (keyEncrypted)?this.enc.decryptAES(SEC_RES["aes_key"], sessionStorage.getItem(keyEncrypted)):null;
    }

    public getLocalStorageEnc(key:string):string {
        let keyEncrypted = this.enc.getHmacSha256(SEC_RES["private_key"], key, true);
        return (keyEncrypted)?this.enc.decryptAES(SEC_RES["aes_key"], localStorage.getItem(keyEncrypted)):null;
    }

    public getLocalStorage(key:string):string {
        let keyEncrypted = this.enc.getHmacSha256(SEC_RES["private_key"], key, true);
        return (keyEncrypted)?localStorage.getItem(keyEncrypted):null;
    }

}