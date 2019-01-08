import { Injectable, Inject } from '@angular/core';
import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { API } from '../../config/api.config';
import { HttpFactoryService } from '../../@core/utils/http-factory.service';
import { SEC_RES } from '../../config/security.config';
import { AuthStorageService } from './auth-storage.service';
import { HTTP_SERVICE } from '../../@core/core.provider';

@Injectable()
export class AuthTokenService {

    constructor(@Inject(HTTP_SERVICE)private httpBaseService:HttpFactoryService, 
                private router: Router,
                private storage: AuthStorageService,
                private idle: Idle){
        idle.setIdle(SEC_RES['session_idle']);
        idle.setTimeout(SEC_RES['session_timeout']);
        idle.setInterrupts(DEFAULT_INTERRUPTSOURCES); 
        idle.onTimeout.subscribe(() => {
            /* console.log('[RIP] Session Timeout'); */
            this.logout();
        });        
        idle.onIdleEnd.subscribe(() => {
            /* console.log('[RIP] Session Idle End'); */
        });
    }

    public login(username: string, password: string): Promise<any> {
        this.storage.clear();
        return this.httpBaseService.
        HTTP_REQUEST(API['auth']['token'], this.getAuthBody(username,password).toString(), this.getAuthHeader())
        .toPromise()
        .then((response)=>{
            this.idle.setIdle(response['expires_in']);
            this.idle.watch();
            /* console.log('[RIP] Session Idle Start'); */
            /* console.log('[RIP] Session Timeout in '+response['expires_in']+' seconds'); */
            this.storage.loginStorage(response);
        });
    }

    public logout(){
        this.idle.stop();
        this.storage.logout();
        this.router.navigate(['/auth']);
    }

    public isLogin():boolean {
        return this.storage.isLogin();
    }

    private getAuthHeader(): HttpHeaders{
        return new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic '+btoa(SEC_RES['client_id'] + ':' +SEC_RES['client_secret']),
            'Accept': 'application/json'
        });
    }

    private getAuthBody(username:string, password:string): URLSearchParams{
        const body = new URLSearchParams();
        body.append('client_id', SEC_RES['client_id']);
        body.append('grant_type', SEC_RES['grant_type']);
        body.append('username', username);
        body.append('password', password);
        return body;
    }

}