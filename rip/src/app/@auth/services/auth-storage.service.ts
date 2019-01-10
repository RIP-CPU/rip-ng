import { Injectable } from '@angular/core';
import { EncryptionService } from './encryption.service';
import { StorageFactoryService } from './storage-factory.service';

@Injectable()
export class AuthStorageService extends StorageFactoryService {

    constructor(protected enc: EncryptionService) {
        super(enc);
    }

    public loginStorage(response: any): void {
        const accessTokenKey = 'access_token';
        const accessTokenValue = response['access_token'];
        const refreshTokenKey = 'refresh_token'
        const refreshTokenValue = response['refresh_token'];
        const publicKey = 'xrkey';
        const publicValue = response['xrkey'];
        const expiresInKey = 'expires_in';
        const expiresInValue = JSON.stringify(response['expires_in']);
        const authorityKey = 'authority';
        const authorityValue = JSON.stringify(response['authority']);
        const emailKey = 'email';
        const emailValue = response['email'];
        const menusKey = 'menus';
        const menusValue = JSON.stringify(response['menus']);
        const serverDateKey = 'server_date';
        const serverDateValue = response['server_date'];

        this.setSessionStorage(accessTokenKey, accessTokenValue);
        this.setSessionStorage(refreshTokenKey, refreshTokenValue);
        this.setSessionStorage(publicKey, publicValue);
        this.setSessionStorage(expiresInKey, expiresInValue);
        this.setSessionStorage(authorityKey, authorityValue);
        this.setSessionStorage(emailKey, emailValue);
        this.setSessionStorage(menusKey, menusValue);
        this.setSessionStorage(serverDateKey, serverDateValue);
        this.setLocalStorage('locale', response['locale']);
        this.setLocalStorage('name', response['name']);
    }

    public logout(): void {
        this.clearSessionStorage();
        this.removeLocalStorageEnc('name');
    }

    public isLogin(): boolean {
        if (this.getSessionStorage('access_token'))
            return true;
        this.clearSessionStorage();
        return false;
    }

}
