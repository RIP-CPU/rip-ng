import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  NbCardModule,
  NbLayoutModule,
  NbCheckboxModule,
  NbAlertModule,
  NbInputModule,
  NbButtonModule,
} from '@nebular/theme';
import { AuthComponent } from './component/auth.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UnauthorizeGuardService } from './services/unauth-guard.service';
import { ThemeModule } from '../@theme/theme.module';
import { NbAuthBlockComponent } from './component/auth-block/auth-block.component';

const components = [
  AuthComponent,
  NbAuthBlockComponent,
  LoginComponent,
  LogoutComponent
];

const routes: Routes = [{
  path: '',
  component: AuthComponent,
  children: [
    {
      path: '',
      component: LoginComponent,
      canActivate: [UnauthorizeGuardService]
    },
    {
      path: 'login',
      component: LoginComponent,
      canActivate: [UnauthorizeGuardService]
    },
    {
      path: 'logout',
      component: LogoutComponent,
      canActivate: [AuthGuardService],
    },
  ],
}];

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    NbLayoutModule,
    NbCardModule,
    NbCheckboxModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ...components,
  ],
})
export class AuthModule { }
