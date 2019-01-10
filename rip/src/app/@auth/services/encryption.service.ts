import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class EncryptionService {

    private keySize: number = 256;
    private ivSize: number = 128;
    private iterations: number = 100;

    public getHmacSha256(secret: string, message: string, hex?: boolean): string {
        const hash = CryptoJS.HmacSHA256(message, secret);
        if (hex)
            return CryptoJS.enc.Hex.stringify(hash).toUpperCase();
        return CryptoJS.enc.Base64.stringify(hash);
    }

    public encryptAES(secretKey: string, message: string): string {
        const salt = CryptoJS.lib.WordArray.random(128 / 8);
        const key = CryptoJS.PBKDF2(secretKey, salt, {
            keySize: this.keySize / 32,
            iterations: this.iterations,
        });
        const iv = CryptoJS.lib.WordArray.random(this.ivSize / 8);
        const encrypted = CryptoJS.AES.encrypt(message, key, {
            iv: iv,
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC,
        });
        const encryptMessage = salt.toString() + iv.toString() + encrypted.toString();
        return encryptMessage;
    }

    public decryptAES(secretKey: string, encryptMessage: string): string {
        const salt = CryptoJS.enc.Hex.parse(encryptMessage.substr(0, 32));
        const iv = CryptoJS.enc.Hex.parse(encryptMessage.substr(32, 32));
        const encrypted = encryptMessage.substring(64);
        const key = CryptoJS.PBKDF2(secretKey, salt, {
            keySize: this.keySize / 32,
            iterations: this.iterations,
        });
        const decrypted = CryptoJS.AES.decrypt(encrypted, key, {
          iv: iv,
          padding: CryptoJS.pad.Pkcs7,
          mode: CryptoJS.mode.CBC,
        });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }

}
