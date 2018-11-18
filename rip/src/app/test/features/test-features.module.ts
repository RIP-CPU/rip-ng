import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { TreeModule } from 'angular-tree-component';
import { ButtonsModule } from './buttons/buttons.module';
import { TestFeaturesRoutingModule } from './test-features-routing.module';
import { TestFeaturesComponent } from './test-features.component';
import { GridComponent } from './grid/grid.component';
import { ModalsComponent } from './modals/modals.component';
import { IconsComponent } from './icons/icons.component';
import { ModalComponent } from './modals/modal/modal.component';
import { TypographyComponent } from './typography/typography.component';
import { TabsComponent, Tab1Component, Tab2Component } from './tabs/tabs.component';
import { SearchComponent } from './search-fields/search-fields.component';
import { PopoversComponent } from './popovers/popovers.component';
import {
  NgxPopoverCardComponent, NgxPopoverFormComponent,
  NgxPopoverTabsComponent,
} from './popovers/popover-examples.component';
import { TreeComponent } from './tree/tree.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { ToasterModule } from 'angular2-toaster';
import { TestDashboardComponent } from './dashboard/test-dashboard.component';
import { FeaturesModule } from '../../@features/features.module';

const components = [
  TestFeaturesComponent,
  TestDashboardComponent,
  GridComponent,
  ModalsComponent,
  IconsComponent,
  ModalComponent,
  TypographyComponent,
  TabsComponent,
  Tab1Component,
  Tab2Component,
  SearchComponent,
  PopoversComponent,
  NgxPopoverCardComponent,
  NgxPopoverFormComponent,
  NgxPopoverTabsComponent,
  TreeComponent,
  NotificationsComponent,
  FormInputsComponent,
  FormLayoutsComponent
];

@NgModule({
  imports: [
    ThemeModule,
    TestFeaturesRoutingModule,
    FeaturesModule,
    ButtonsModule,
    TreeModule,
    ToasterModule.forRoot(),
  ],
  declarations: [
    ...components,
  ],
  entryComponents: [
    ModalComponent,
    NgxPopoverCardComponent,
    NgxPopoverFormComponent,
    NgxPopoverTabsComponent,
  ],
})
export class TestFeaturesModule { }
