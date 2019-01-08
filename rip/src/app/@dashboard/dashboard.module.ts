import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeModule } from '../@theme/theme.module';
import { DashboardComponent } from './component/dashboard.component';
import { DashboardPageComponent } from './pages/dashboard-page.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { CommonSharedModule } from '../@common/common.module';
import { ChartSharedModule } from '../@charts/chart-shared.module';

const components = [
    DashboardComponent,
    DashboardPageComponent,
];

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [
    {
      path: '',
      component: DashboardPageComponent,
    },
  ],
}];

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    CommonSharedModule,
    ChartSharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ...components,
  ],
})
export class DashboardModule { }
