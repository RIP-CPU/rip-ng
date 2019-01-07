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
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpInterceptorService } from './@common/services/http-interceptor.service';
import { AuthGuardService } from './@auth/services/auth-guard.service';
import { AuthTokenService } from './@auth/services/auth-token.service';
import { UnauthorizeGuardService } from './@auth/services/unauth-guard.service';
import { HttpCommonService } from './@common/services/http-common.service';
import { HTTP_SERVICE } from './app.provider';
import { AuthGuardChildService } from './@auth/services/auth-guard-child.service';
import { EncryptionService } from './@auth/services/encryption.service';
import { AuthStorageService } from './@auth/services/auth-storage.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    NgIdleKeepaliveModule.forRoot(),
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
    AuthGuardService, AuthGuardChildService, UnauthorizeGuardService, AuthTokenService,
    EncryptionService, AuthStorageService
  ],
})
export class AppModule {
}
