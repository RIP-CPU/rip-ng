import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';

import { ThemeModule } from '../@theme/theme.module';
import { CKEditorComponent } from './ckeditor/ckeditor.component';
import { TinyMCEComponent } from './tiny-mce/tiny-mce.component';

export const routedComponents = [
  TinyMCEComponent,
  CKEditorComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    CKEditorModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  exports: [
    ...routedComponents,
  ],
})
export class EditorsModule { }
