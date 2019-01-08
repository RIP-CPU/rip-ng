import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class EncryptionService {

    private keySize:number = 256;
    private ivSize:number = 128;
    private iterations:number = 100;

    public getHmacSha256(secret:string, message:string, hex?:boolean): string {
        let hash = CryptoJS.HmacSHA256(message, secret); 
        if(hex)
            return CryptoJS.enc.Hex.stringify(hash).toUpperCase();
        return CryptoJS.enc.Base64.stringify(hash);
    }

    public encryptAES(secretKey:string, message:string, hex?:boolean): string {
        let salt = CryptoJS.lib.WordArray.random(128/8);
        let key = CryptoJS.PBKDF2(secretKey, salt, {
            keySize: this.keySize/32,
            iterations: this.iterations
        });        
        let iv = CryptoJS.lib.WordArray.random(this.ivSize/8);        
        let encrypted = CryptoJS.AES.encrypt(message, key, { 
            iv: iv, 
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC            
        });        
        let encryptMessage = salt.toString()+ iv.toString() + encrypted.toString();
        return encryptMessage;
    }

    public decryptAES(secretKey:string, encryptMessage:string): string {
        let salt = CryptoJS.enc.Hex.parse(encryptMessage.substr(0, 32));
        let iv = CryptoJS.enc.Hex.parse(encryptMessage.substr(32, 32))
        let encrypted = encryptMessage.substring(64);        
        let key = CryptoJS.PBKDF2(secretKey, salt, {
            keySize: this.keySize/32,
            iterations: this.iterations
        });      
        let decrypted = CryptoJS.AES.decrypt(encrypted, key, { 
          iv: iv, 
          padding: CryptoJS.pad.Pkcs7,
          mode: CryptoJS.mode.CBC          
        })
        return decrypted.toString(CryptoJS.enc.Utf8);
    }

}