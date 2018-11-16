
import { Component } from "@angular/core";
import { AuthTokenService } from "../service/auth-token.service";

@Component({
    selector: "logout-component",
    template: ""
})
export class Day4LogoutComponent {

    constructor(private authTokenService:AuthTokenService){
        this.authTokenService.logout();
    }
}
