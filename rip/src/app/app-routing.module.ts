import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './@auth/services/auth-guard.service';

const routes: Routes = [
  {  
    path: 'test', 
    loadChildren: 'app/test/pages.module#PagesModule',
    canActivate: [AuthGuardService],
  },
  {
    path: 'auth',
    loadChildren: 'app/@auth/auth.module#AuthModule'
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
