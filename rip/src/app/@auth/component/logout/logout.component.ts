import { Component } from '@angular/core';
import { AuthTokenService } from '../../services/auth-token.service';

@Component({
    selector: "logout-component",
    template: ""
})
export class LogoutComponent {

    constructor(private authTokenService:AuthTokenService){
        this.authTokenService.logout();
    }
}
