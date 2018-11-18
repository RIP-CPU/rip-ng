import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './component/pages.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

export const PAGES_COMPONENTS = [
  PagesComponent,
  NotFoundComponent
];

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    loadChildren: 'app/@dashboard/dashboard.module#DashboardModule',
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
