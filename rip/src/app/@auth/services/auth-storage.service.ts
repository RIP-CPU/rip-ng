import { Injectable } from '@angular/core';
import { EncryptionService } from './encryption.service';
import { SEC_RES } from '../../config/security.config';

@Injectable()
export class AuthStorageService {

    constructor(private enc: EncryptionService){}

    public clear():void {
        sessionStorage.clear();
    }

    public loginStorage(response:any):void {
        const accessTokenKey = this.enc.getHmacSha256(SEC_RES['private_key'], 'access_token', true);
        const accessTokenValue = this.enc.encryptAES(SEC_RES['aes_key'], response['access_token']);

        const refreshTokenKey = this.enc.getHmacSha256(SEC_RES['private_key'], 'refresh_token', true);
        const refreshTokenValue = this.enc.encryptAES(SEC_RES['aes_key'], response['refresh_token']);

        const publicKey = this.enc.getHmacSha256(SEC_RES['private_key'], 'xrkey', true);
        const publicValue = this.enc.encryptAES(SEC_RES['aes_key'], response['xrkey']);

        const expiresInKey = this.enc.getHmacSha256(SEC_RES['private_key'], 'expires_in', true);
        const expiresInValue = this.enc.encryptAES(SEC_RES['aes_key'], JSON.stringify(response['expires_in']));

        const authorityKey = this.enc.getHmacSha256(SEC_RES['private_key'], 'authority', true);
        const authorityValue = this.enc.encryptAES(SEC_RES['aes_key'], JSON.stringify(response['authority']));

        const emailKey = this.enc.getHmacSha256(SEC_RES['private_key'], 'email', true);
        const emailValue = this.enc.encryptAES(SEC_RES['aes_key'], response['email']);

        const menusKey = this.enc.getHmacSha256(SEC_RES['private_key'], 'menus', true);
        const menusValue = this.enc.encryptAES(SEC_RES['aes_key'], JSON.stringify(response['menus']));

        const serverDateKey = this.enc.getHmacSha256(SEC_RES['private_key'], 'server_date', true);
        const serverDateValue = this.enc.encryptAES(SEC_RES['aes_key'], response['server_date']);
        
        sessionStorage.setItem(accessTokenKey, accessTokenValue);
        sessionStorage.setItem(refreshTokenKey, refreshTokenValue);
        sessionStorage.setItem(publicKey, publicValue);
        sessionStorage.setItem(expiresInKey, expiresInValue);
        sessionStorage.setItem(authorityKey, authorityValue);
        sessionStorage.setItem(emailKey, emailValue);
        sessionStorage.setItem(menusKey, menusValue);
        sessionStorage.setItem(serverDateKey, serverDateValue);
        localStorage.setItem('locale', response['locale']);
        localStorage.setItem('name', response['name']);
    }

    public logout():void {
        sessionStorage.clear();
        localStorage.removeItem(this.enc.getHmacSha256(SEC_RES['private_key'], 'name', true));
    }

    public isLogin():boolean {
        let accessTokenKey = this.enc.getHmacSha256(SEC_RES['private_key'], 'access_token', true);  
        if(sessionStorage.getItem(accessTokenKey))
            return true;
        sessionStorage.clear();
        return false;
    }

    public getSessionStorage(key:string):string {
        let keyEncrypted = this.enc.getHmacSha256(SEC_RES['private_key'], key, true);
        return (keyEncrypted)?this.enc.decryptAES(SEC_RES['aes_key'], sessionStorage.getItem(keyEncrypted)) : null;
    }

    public getLocalStorageEnc(key:string):string {
        let keyEncrypted = this.enc.getHmacSha256(SEC_RES['private_key'], key, true);
        return (keyEncrypted)?this.enc.decryptAES(SEC_RES['aes_key'], localStorage.getItem(keyEncrypted)) : null;
    }

    public getLocalStorage(key:string):string {
        let keyEncrypted = this.enc.getHmacSha256(SEC_RES['private_key'], key, true);
        return (keyEncrypted)?localStorage.getItem(keyEncrypted):null;
    }

}