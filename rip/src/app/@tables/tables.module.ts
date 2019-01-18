import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../@theme/theme.module';
import { SmartTableService } from '../@core/data/smart-table.service';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RipDatatableComponent } from './ngx-datatable/rip-datatable.component';

const components = [
  SmartTableComponent,
  RipDatatableComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
  providers: [
    SmartTableService,
  ],
})
export class TablesModule { }
