import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestFeaturesComponent } from './test-features.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { GridComponent } from './grid/grid.component';
import { IconsComponent } from './icons/icons.component';
import { ModalsComponent } from './modals/modals.component';
import { TypographyComponent } from './typography/typography.component';
import { TabsComponent, Tab1Component, Tab2Component } from './tabs/tabs.component';
import { SearchComponent } from './search-fields/search-fields.component';
import { PopoversComponent } from './popovers/popovers.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TreeComponent } from './tree/tree.component';
import { TestDashboardComponent } from './dashboard/test-dashboard.component';

const routes: Routes = [{
  path: '',
  component: TestFeaturesComponent,
  children: [{
    path: '',
    component: TestDashboardComponent,
  }, {
    path: 'buttons',
    component: ButtonsComponent,
  }, {
    path: 'grid',
    component: GridComponent,
  }, {
    path: 'icons',
    component: IconsComponent,
  }, {
    path: 'modals',
    component: ModalsComponent,
  }, {
    path: 'popovers',
    component: PopoversComponent,
  }, {
    path: 'typography',
    component: TypographyComponent,
  }, {
    path: 'search-fields',
    component: SearchComponent,
  }, {
    path: 'tabs',
    component: TabsComponent,
    children: [{
      path: '',
      redirectTo: 'tab1',
      pathMatch: 'full',
    }, {
      path: 'tab1',
      component: Tab1Component,
    }, {
      path: 'tab2',
      component: Tab2Component,
    }],
  }, {
    path: 'tree',
    component: TreeComponent,
  }, {
    path: 'notifications',
    component: NotificationsComponent,
  }, {
    path: 'inputs',
    component: FormInputsComponent,
  }, {
    path: 'layouts',
    component: FormLayoutsComponent
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestFeaturesRoutingModule { }
