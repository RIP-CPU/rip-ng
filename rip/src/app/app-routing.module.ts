import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './@auth/services/auth-guard.service';
import { UnauthorizeGuardService } from './@auth/services/unauth-guard.service';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: 'app/@auth/auth.module#AuthModule'
  },
  {
    path: 'miscellaneous',
    loadChildren: 'app/miscellaneous/miscellaneous.module#MiscellaneousModule',
    canActivate: [UnauthorizeGuardService]
  },
  {
    path: 'app',
    /* loadChildren: 'app/@pages/pages.module#PagesModule', */
    loadChildren: 'app/test/test.module#TestModule',
    canActivate: [AuthGuardService],
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'miscellaneous/404' },
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
