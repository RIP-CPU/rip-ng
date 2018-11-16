import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { AuthGuardService } from './@auth/services/auth-guard.service';
import { LoginComponent } from './@auth/component/login.component';
import { UnauthorizeGuardService } from './@auth/services/unauth-guard.service';
import { LogoutComponent } from './@auth/component/logout.component';

const routes: Routes = [
  {  
    path: 'test', 
    loadChildren: 'app/test/pages.module#PagesModule',
    canActivate: [AuthGuardService],
  },
  {
    path: 'auth',
    component: NbAuthComponent,
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
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'test/miscellaneous/404' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
