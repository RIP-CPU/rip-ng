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
import { AuthGuardService } from './test/latihan/service/auth-guard.service';
import { Day4LoginComponent } from './test/latihan/day4/login.component';
import { AuthGuardLoginService } from './test/latihan/service/auth-guard-login.service';
import { Day4LogoutComponent } from './test/latihan/day4/logout.component';

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
        component: Day4LoginComponent,
        canActivate: [AuthGuardLoginService]
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: Day4LogoutComponent,
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
