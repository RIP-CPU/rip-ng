import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { StatusCardComponent } from './component/status-card/status-card.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { RoomsComponent } from './component/rooms/rooms.component';
import { RoomSelectorComponent } from './component/rooms/room-selector/room-selector.component';
import { TemperatureComponent } from './component/temperature/temperature.component';
import { TemperatureDraggerComponent } from './component/temperature/temperature-dragger/temperature-dragger.component';
import { TeamComponent } from './component/team/team.component';
import { KittenComponent } from './component/kitten/kitten.component';
import { SecurityCamerasComponent } from './component/security-cameras/security-cameras.component';
import { ElectricityComponent } from './component/electricity/electricity.component';
import { ElectricityChartComponent } from './component/electricity/electricity-chart/electricity-chart.component';
import { WeatherComponent } from './component/weather/weather.component';
import { SolarComponent } from './component/solar/solar.component';
import { PlayerComponent } from './component/rooms/player/player.component';
import { TrafficComponent } from './component/traffic/traffic.component';
import { TrafficChartComponent } from './component/traffic/traffic-chart.component';

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [
    StatusCardComponent,
    TemperatureDraggerComponent,
    ContactsComponent,
    RoomSelectorComponent,
    TemperatureComponent,
    RoomsComponent,
    TeamComponent,
    KittenComponent,
    SecurityCamerasComponent,
    ElectricityComponent,
    ElectricityChartComponent,
    WeatherComponent,
    PlayerComponent,
    SolarComponent,
    TrafficComponent,
    TrafficChartComponent,
  ],
  exports: [
    StatusCardComponent,
    TemperatureDraggerComponent,
    ContactsComponent,
    RoomSelectorComponent,
    TemperatureComponent,
    RoomsComponent,
    TeamComponent,
    KittenComponent,
    SecurityCamerasComponent,
    ElectricityComponent,
    ElectricityChartComponent,
    WeatherComponent,
    PlayerComponent,
    SolarComponent,
    TrafficComponent,
    TrafficChartComponent,    
  ]
})
export class FeaturesModule { }
