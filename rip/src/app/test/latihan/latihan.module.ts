import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { DayOneComponent } from './day1/day-one.component';
import { RouterModule, Routes } from '@angular/router';
import { LatihanComponent } from './latihan.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { DayTwoComponent } from './day2/day-two.component';
import { DayTwoAComponent } from './day2a/day-two-a.component';
import { DayTwoBComponent } from './day2b/day-two-b.component';
import { DayTwoCComponent } from './day2c/day-two-c.component';
import { DayTwoService } from './service/day-two.service';
import { GenderComponent } from './gender/gender.component';
import { DayThreeComponent } from './day3/day-three.component';
import { UploadFileComponent } from './day3-upload/upload-file.component';

const components = [
  DayOneComponent,
  DayTwoComponent,
  DayTwoAComponent,
  DayTwoBComponent,
  DayTwoCComponent,
  DayThreeComponent,
  LatihanComponent,
  GenderComponent,
  UploadFileComponent
];

const routes: Routes = [{
  path: '',
  component: LatihanComponent,
  children: [{
    path: 'day-one',
    component: DayOneComponent,
  },{
    path: 'day-two',
    component: DayTwoComponent,
  },{
    path: 'day-two-result',
    component: DayTwoCComponent,
  },{
    path: 'day-two-result/:id',
    component: DayTwoCComponent,
  },{
    path: 'day-two-result/:id/:name',
    component: DayTwoCComponent,
  },{
    path: 'day-three',
    component: DayThreeComponent,
  }],
}];

@NgModule({
  imports: [
    ThemeModule,
    DashboardModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ...components,
  ],
  providers:[
    DayTwoService
  ]
})
export class LatihanModule { }
