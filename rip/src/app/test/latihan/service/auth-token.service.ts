import { Injectable, Inject } from "@angular/core";
import { ConstantModel } from "./app-constant.model";
import { HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { API } from "../../../config/api.config";
import { HttpFactoryService } from "../../../@common/services/http-factory.service";
import { HTTP_SERVICE } from "../../../app.provider";
import { SEC_RES } from "../../../config/security.config";

@Injectable()
export class AuthTokenService {
    
    private constant:ConstantModel = new ConstantModel();

    constructor(@Inject(HTTP_SERVICE)private httpBaseService:HttpFactoryService, private router: Router){}

    login(username, password){
        const body = new URLSearchParams();
        body.append("client_id", SEC_RES["client_id"]);
        body.append("client_secret", SEC_RES["client_secret"]);
        body.append("grant_type", SEC_RES["grant_type"]);
        body.append("username", username);
        body.append("password", password);
        const headers = new HttpHeaders({
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic "+btoa(this.constant.client_id + ":" +this.constant.client_secret),
            "Accept": "application/json"
        })
        this.httpBaseService.HTTP_REQUEST(API["auth"]["token"], body.toString(), headers).
        subscribe((response:Response)=>{
            localStorage.setItem("access_token",response["access_token"]);
            this.router.navigate(["/test"]);
        })
      }

      public logout(){
          localStorage.removeItem("access_token")
          this.router.navigate(["/"]);
      }

      public isLogin():boolean{
          if(localStorage.getItem("access_token"))
              return true;
          return false;
      }
}