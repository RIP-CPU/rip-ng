import { Component, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-auth',
  styleUrls: ["auth.component.scss"],
  templateUrl: 'auth.component.html',
})
export class AuthComponent implements OnDestroy {

    private alive;
    subscription: any;
    authenticated: boolean;
    token: string;

    constructor(private location: Location){}

    back(): boolean{
        this.location.back();
        return false;
    }

    ngOnDestroy(): void{
        this.alive = false;
    }

}
