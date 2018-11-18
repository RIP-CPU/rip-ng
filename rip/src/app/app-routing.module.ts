import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './@auth/services/auth-guard.service';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: 'app/@auth/auth.module#AuthModule'
  },
  {
    path: 'app',
    /* loadChildren: 'app/@pages/pages.module#PagesModule', */
    loadChildren: 'app/test/test.module#TestModule',
    canActivate: [AuthGuardService],
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'app/miscellaneous/404' },
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
