import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousRoutingModule, routedComponents } from './miscellaneous-routing.module';
import { CommonModule } from '@angular/common';
import {
  NbLayoutModule,
  NbCardModule,
  NbCheckboxModule,
  NbAlertModule,
  NbInputModule,
  NbButtonModule,
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    NbLayoutModule,
    NbCardModule,
    NbCheckboxModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    FormsModule,
    HttpClientModule,
    MiscellaneousRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class MiscellaneousModule { }
