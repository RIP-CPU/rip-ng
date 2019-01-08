import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { TreeModule } from 'angular-tree-component';
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
import { AccordionComponent } from './accordion/accordion.component';
import { AlertComponent } from './alert/alert.component';
import { ButtonsModule } from './buttons/buttons.module';
import { CalendarKitMonthCellComponent } from './calendar-kit/month-cell/month-cell.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayCellComponent } from './calendar/day-cell/day-cell.component';
import { CalendarKitFullCalendarShowcaseComponent } from './calendar-kit/calendar-kit.component';
import { ChatComponent } from './chat/chat.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { NebularFormInputsComponent } from './form-inputs/nebular-form-inputs.component';
import { NebularSelectComponent } from './form-inputs/nebular-select/nebular-select.component';
import { InfiniteListComponent } from './infinite-list/infinite-list.component';
import { NewsPostComponent } from './infinite-list/news-post/news-post.component';
import { NewsPostPlaceholderComponent } from './infinite-list/news-post-placeholder/news-post-placeholder.component';
import { ListComponent } from './list/list.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {
  InteractiveProgressBarComponent,
} from './progress-bar/interactive-progress-bar/interactive-progress-bar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerColorComponent } from './spinner/spinner-color/spinner-color.component';
import { SpinnerInButtonsComponent } from './spinner/spinner-in-buttons/spinner-in-buttons.component';
import { SpinnerInTabsComponent } from './spinner/spinner-in-tabs/spinner-in-tabs.component';
import { SpinnerSizesComponent } from './spinner/spinner-sizes/spinner-sizes.component';
import { StepperComponent } from './stepper/stepper.component';
import { NewsService } from './services/news.service';

const components = [
  TestFeaturesComponent,
  AccordionComponent,
  AlertComponent,
  DayCellComponent, CalendarComponent,
  CalendarKitMonthCellComponent, CalendarKitFullCalendarShowcaseComponent,
  ChatComponent,
  TestDashboardComponent,
  DatepickerComponent,
  NebularFormInputsComponent, NebularSelectComponent, FormInputsComponent,
  FormLayoutsComponent,
  GridComponent,
  IconsComponent,
  InfiniteListComponent, NewsPostComponent, NewsPostPlaceholderComponent,
  ListComponent,
  ModalsComponent, ModalComponent,
  NotificationsComponent,
  NgxPopoverCardComponent, NgxPopoverFormComponent, NgxPopoverTabsComponent, PopoversComponent,
  ProgressBarComponent, InteractiveProgressBarComponent,
  SearchComponent,
  SpinnerComponent, SpinnerColorComponent, SpinnerInButtonsComponent, SpinnerInTabsComponent, SpinnerSizesComponent,
  StepperComponent,
  TabsComponent, Tab1Component, Tab2Component,
  TreeComponent,
  TypographyComponent,
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
  providers: [
    NewsService,
  ],
})
export class TestFeaturesModule { }
