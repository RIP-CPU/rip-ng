import { EncryptionService } from './encryption.service';
import { SEC_RES } from '../../config/security.config';

export class StorageFactoryService {

    constructor(protected enc: EncryptionService) {}

    public getSessionStorage(key: string): string {
        const keyEncrypted = this.enc.getHmacSha256(SEC_RES['private_key'], key, true);
        return (sessionStorage.getItem(keyEncrypted)) ? this.enc.decryptAES(SEC_RES['aes_key'], sessionStorage.getItem(keyEncrypted)) : null;
    }

    public setSessionStorage(key: string, value: string): void {
        const keyEncrypted = this.enc.getHmacSha256(SEC_RES['private_key'], key, true);
        const valueEncrypted = this.enc.encryptAES(SEC_RES['aes_key'], value);
        sessionStorage.setItem(keyEncrypted, valueEncrypted);
    }

    public removeSessionStorage(key: string): void {
        const keyEncrypted = this.enc.getHmacSha256(SEC_RES['private_key'], key, true);
        sessionStorage.removeItem(keyEncrypted);
    }

    public getLocalStorageEnc(key: string): string {
        const keyEncrypted = this.enc.getHmacSha256(SEC_RES['private_key'], key, true);
        return (localStorage.getItem(keyEncrypted)) ? this.enc.decryptAES(SEC_RES['aes_key'], localStorage.getItem(keyEncrypted)) : null;
    }

    public setLocalStorageEnc(key: string, value: string): void {
        const keyEncrypted = this.enc.getHmacSha256(SEC_RES['private_key'], key, true);
        const valueEncrypted = this.enc.encryptAES(SEC_RES['aes_key'], value);
        localStorage.setItem(keyEncrypted, valueEncrypted);
    }

    public removeLocalStorageEnc(key: string): void {
        const keyEncrypted = this.enc.getHmacSha256(SEC_RES['private_key'], key, true);
        localStorage.removeItem(keyEncrypted);
    }

    public getLocalStorage(key: string): string {
        return (key) ? localStorage.getItem(key) : null;
    }

    public setLocalStorage(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    public removeLocalStorage(key: string): void {
        localStorage.removeItem(key);
    }

    public clearSessionStorage(): void {
        sessionStorage.clear();
    }

    public clearLocalStorage(): void {
        localStorage.clear();
    }

    public clearAll(): void {
        sessionStorage.clear();
        localStorage.clear();
    }

}
