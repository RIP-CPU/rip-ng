/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from './test/sample/test.component';
import { HttpInterceptorService } from './test/latihan/service/http-interceptor.service';
import { AuthGuardService } from './test/latihan/service/auth-guard.service';
import { Day4LoginComponent } from './test/latihan/day4/login.component';
import { AuthTokenService } from './test/latihan/service/auth-token.service';
import { AuthGuardLoginService } from './test/latihan/service/auth-guard-login.service';
import { Day4LogoutComponent } from './test/latihan/day4/logout.component';
import { HttpCommonService } from './@common/services/http-common.service';
import { HTTP_SERVICE } from './app.provider';

@NgModule({
  declarations: [AppComponent, TestComponent, Day4LoginComponent, Day4LogoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }, 
    { provide: HTTP_SERVICE, useClass: HttpCommonService}, 
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
    AuthGuardService, AuthGuardLoginService, AuthTokenService
  ],
})
export class AppModule {
}
