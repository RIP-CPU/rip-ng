import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { AuthTokenService } from "../../services/auth-token.service";
import { Router } from "@angular/router";

@Component({
    selector: "login-component",
    styleUrls: ["login.component.scss"],
    templateUrl: "login.component.html"
})
export class LoginComponent {

    form: FormGroup = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })

    constructor(private router: Router, private authTokenService:AuthTokenService){}

    login(){
      this.authTokenService.login(
        this.form.get("username").value,
        this.form.get("password").value);
    }
}
