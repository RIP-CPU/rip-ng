import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { ChartModule } from 'angular2-chartjs';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { StatsCardFrontComponent } from './component/profit-card/front-side/stats-card-front.component';
import { StatsAreaChartComponent } from './component/profit-card/back-side/stats-area-chart.component';
import {
  StatsBarAnimationChartComponent,
} from './component/profit-card/front-side/stats-bar-animation-chart.component';
import { ProfitCardComponent } from './component/profit-card/profit-card.component';
import { OrdersChartComponent } from './component/charts-panel/charts/orders-chart.component';
import { ProfitChartComponent } from './component/charts-panel/charts/profit-chart.component';
import { StatsCardBackComponent } from './component/profit-card/back-side/stats-card-back.component';
import { TrafficFrontCardComponent } from './component/traffic-reveal-card/front-side/traffic-front-card.component';
import { TrafficBackCardComponent } from './component/traffic-reveal-card/back-side/traffic-back-card.component';
import { TrafficBarComponent } from './component/traffic-reveal-card/front-side/traffic-bar/traffic-bar.component';
import { CountryOrdersChartComponent } from './component/country-orders/chart/country-orders-chart.component';
import {
  ECommerceVisitorsStatisticsComponent,
} from './component/visitors-analytics/visitors-statistics/visitors-statistics.component';
import { ECommerceLegendChartComponent } from './component/legend-chart/legend-chart.component';
import { ECommerceUserActivityComponent } from './component/user-activity/user-activity.component';
import { ECommerceProgressSectionComponent } from './component/progress-section/progress-section.component';
import { SlideOutComponent } from './component/slide-out/slide-out.component';
import { EarningPieChartComponent } from './component/earning-card/back-side/earning-pie-chart.component';
import {
  EarningLiveUpdateChartComponent,
} from './component/earning-card/front-side/earning-live-update-chart.component';
import { CountryOrdersMapService } from './services/country-orders-map.service';
import { TrafficRevealCardComponent } from './component/traffic-reveal-card/traffic-reveal-card.component';
import { TrafficBarChartComponent } from './component/traffic-reveal-card/back-side/traffic-bar-chart.component';
import {
  TrafficCardsHeaderComponent,
} from './component/traffic-reveal-card/traffic-cards-header/traffic-cards-header.component';
import { CountryOrdersComponent } from './component/country-orders/country-orders.component';
import { CountryOrdersMapComponent } from './component/country-orders/map/country-orders-map.component';
import {
  ECommerceVisitorsAnalyticsComponent,
} from './component/visitors-analytics/visitors-analytics.component';
import { 
  ECommerceVisitorsAnalyticsChartComponent,
} from './component/visitors-analytics/visitors-analytics-chart/visitors-analytics-chart.component';
import { EarningCardComponent } from './component/earning-card/earning-card.component';
import { EarningCardFrontComponent } from './component/earning-card/front-side/earning-card-front.component';
import { EarningCardBackComponent } from './component/earning-card/back-side/earning-card-back.component';
import { ECommerceChartsPanelComponent } from './component/charts-panel/charts-panel.component';
import {
  ChartPanelHeaderComponent,
} from './component/charts-panel/chart-panel-header/chart-panel-header.component';
import {
  ChartPanelSummaryComponent,
} from './component/charts-panel/chart-panel-summary/chart-panel-summary.component';
import { ChartjsBarComponent } from './component/charts/chartjs/chartjs-bar.component';
import { ChartjsLineComponent } from './component/charts/chartjs/chartjs-line.component';
import { ChartjsPieComponent } from './component/charts/chartjs/chartjs-pie.component';
import { ChartjsMultipleXaxisComponent } from './component/charts/chartjs/chartjs-multiple-xaxis.component';
import { ChartjsBarHorizontalComponent } from './component/charts/chartjs/chartjs-bar-horizontal.component';
import { ChartjsRadarComponent } from './component/charts/chartjs/chartjs-radar.component';
import { D3BarComponent } from './component/charts/d3/d3-bar.component';
import { D3LineComponent } from './component/charts/d3/d3-line.component';
import { D3PieComponent } from './component/charts/d3/d3-pie.component';
import { D3AreaStackComponent } from './component/charts/d3/d3-area-stack.component';
import { D3PolarComponent } from './component/charts/d3/d3-polar.component';
import { D3AdvancedPieComponent } from './component/charts/d3/d3-advanced-pie.component';
import { EchartsLineComponent } from './component/charts/echarts/echarts-line.component';
import { EchartsPieComponent } from './component/charts/echarts/echarts-pie.component';
import { EchartsBarComponent } from './component/charts/echarts/echarts-bar.component';
import { EchartsMultipleXaxisComponent } from './component/charts/echarts/echarts-multiple-xaxis.component';
import { EchartsAreaStackComponent } from './component/charts/echarts/echarts-area-stack.component';
import { EchartsBarAnimationComponent } from './component/charts/echarts/echarts-bar-animation.component';
import { EchartsRadarComponent } from './component/charts/echarts/echarts-radar.component';

const components = [
  StatsCardFrontComponent,
  StatsAreaChartComponent,
  StatsBarAnimationChartComponent,
  ProfitCardComponent,
  ECommerceChartsPanelComponent,
  ChartPanelHeaderComponent,
  ChartPanelSummaryComponent,
  OrdersChartComponent,
  ProfitChartComponent,
  StatsCardBackComponent,
  TrafficRevealCardComponent,
  TrafficBarChartComponent,
  TrafficFrontCardComponent,
  TrafficBackCardComponent,
  TrafficBarComponent,
  TrafficCardsHeaderComponent,
  CountryOrdersComponent,
  CountryOrdersMapComponent,
  CountryOrdersChartComponent,
  ECommerceVisitorsAnalyticsComponent,
  ECommerceVisitorsAnalyticsChartComponent,
  ECommerceVisitorsStatisticsComponent,
  ECommerceLegendChartComponent,
  ECommerceUserActivityComponent,
  ECommerceProgressSectionComponent,
  SlideOutComponent,
  EarningCardComponent,
  EarningCardFrontComponent,
  EarningCardBackComponent,
  EarningPieChartComponent,
  EarningLiveUpdateChartComponent,

  ChartjsBarComponent,
  ChartjsLineComponent,
  ChartjsPieComponent,
  ChartjsMultipleXaxisComponent,
  ChartjsBarHorizontalComponent,
  ChartjsRadarComponent,
  D3BarComponent,
  D3LineComponent,
  D3PieComponent,
  D3AreaStackComponent,
  D3PolarComponent,
  D3AdvancedPieComponent,
  EchartsLineComponent,
  EchartsPieComponent,
  EchartsBarComponent,
  EchartsMultipleXaxisComponent,
  EchartsAreaStackComponent,
  EchartsBarAnimationComponent,
  EchartsRadarComponent,
];

const components_export = [
  ProfitCardComponent,
  EarningCardComponent,
  TrafficRevealCardComponent,
  ECommerceChartsPanelComponent,
  CountryOrdersComponent,
  ECommerceProgressSectionComponent,
  ECommerceVisitorsAnalyticsComponent,
  ECommerceUserActivityComponent,

  ChartjsBarComponent,
  ChartjsLineComponent,
  ChartjsPieComponent,
  ChartjsMultipleXaxisComponent,
  ChartjsBarHorizontalComponent,
  ChartjsRadarComponent,
  D3BarComponent,
  D3LineComponent,
  D3PieComponent,
  D3AreaStackComponent,
  D3PolarComponent,
  D3AdvancedPieComponent,
  EchartsLineComponent,
  EchartsPieComponent,
  EchartsBarComponent,
  EchartsMultipleXaxisComponent,
  EchartsAreaStackComponent,
  EchartsBarAnimationComponent,
  EchartsRadarComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components_export,
  ],
  providers: [
    CountryOrdersMapService,
  ],
})
export class ChartSharedModule { }
