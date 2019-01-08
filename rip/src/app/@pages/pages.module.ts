import { NgModule } from '@angular/core';

import { ThemeModule } from '../@theme/theme.module';
import { PagesRoutingModule, PAGES_COMPONENTS } from './pages-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    PagesRoutingModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
