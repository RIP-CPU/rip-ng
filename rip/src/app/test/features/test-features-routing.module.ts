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
import { AccordionComponent } from './accordion/accordion.component';
import { AlertComponent } from './alert/alert.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarKitFullCalendarShowcaseComponent } from './calendar-kit/calendar-kit.component';
import { ChatComponent } from './chat/chat.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { NebularFormInputsComponent } from './form-inputs/nebular-form-inputs.component';
import { InfiniteListComponent } from './infinite-list/infinite-list.component';
import { ListComponent } from './list/list.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { StepperComponent } from './stepper/stepper.component';

const routes: Routes = [{
  path: '',
  component: TestFeaturesComponent,
  children: [{
    path: '',
    component: TestDashboardComponent,
  }, {
    path: 'accordion',
    component: AccordionComponent,
  }, {
    path: 'alert',
    component: AlertComponent,
  }, {
    path: 'buttons',
    component: ButtonsComponent,
  }, {
    path: 'calendar',
    component: CalendarComponent,
  }, {
    path: 'calendar-kit',
    component: CalendarKitFullCalendarShowcaseComponent,
  }, {
    path: 'chat',
    component: ChatComponent,
  }, {
    path: 'datepicker',
    component: DatepickerComponent,
  }, {
    path: 'select',
    component: NebularFormInputsComponent,
  }, {
    path: 'inputs',
    component: FormInputsComponent,
  }, {
    path: 'layouts',
    component: FormLayoutsComponent,
  }, {
    path: 'grid',
    component: GridComponent,
  }, {
    path: 'icons',
    component: IconsComponent,
  }, {
    path: 'infinite-list',
    component: InfiniteListComponent,
  }, {
    path: 'list',
    component: ListComponent,
  }, {
    path: 'modals',
    component: ModalsComponent,
  }, {
    path: 'notifications',
    component: NotificationsComponent,
  }, {
    path: 'popovers',
    component: PopoversComponent,
  }, {
    path: 'progress-bar',
    component: ProgressBarComponent,
  }, {
    path: 'search-fields',
    component: SearchComponent,
  }, {
    path: 'spinner',
    component: SpinnerComponent,
  }, {
    path: 'stepper',
    component: StepperComponent,
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
    path: 'typography',
    component: TypographyComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestFeaturesRoutingModule { }
