import { NgModule } from '@angular/core';

import { ThemeModule } from '../@theme/theme.module';
import { TestComponent } from './test.component';
import { TestRoutingModule } from './test-routing.module';
import { ChartsComponent } from './charts/charts.component';
import { EchartsComponent } from './charts/echarts.component';
import { ChartjsComponent } from './charts/chartjs.component';
import { D3Component } from './charts/d3.component';
import { ChartSharedModule } from '../@charts/chart-shared.module';
import { TestMapsComponent } from './maps/test-maps.component';
import { MapsModule } from '../@maps/maps.module';
import { EditorsModule } from '../@editors/editors.module';
import { TestEditorsComponent } from './editors/test-editors.component';
import { TablesModule } from '../@tables/tables.module';
import { TestTablesComponent } from './tables/test-tables.component';

@NgModule({
  imports: [
    ThemeModule,
    TestRoutingModule,
    ChartSharedModule,
    MapsModule,
    EditorsModule,
    TablesModule
  ],
  declarations: [
    TestComponent,
    ChartsComponent,
    EchartsComponent,
    ChartjsComponent,
    D3Component,
    TestMapsComponent,
    TestEditorsComponent,
    TestTablesComponent
  ],
})
export class TestModule {
}
