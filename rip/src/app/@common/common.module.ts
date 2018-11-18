import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';

const components = [
];

const components_export = [
];

@NgModule({
  imports: [
    ThemeModule
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components_export,
  ],
})
export class CommonSharedModule { }
