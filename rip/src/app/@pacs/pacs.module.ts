import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';

import { RouterModule, Routes } from '@angular/router';
import { ThemeModule } from '../@theme/theme.module';
import { DicomViewerArchiveComponent } from './components/dicom-viewer-archive.component';
import { TagsDialogComponent } from './components/tags-dialog/tags-dialog.component';
import { TagsTableComponent } from './components/tags-table/tags-table.component';

const components = [
  DicomViewerArchiveComponent,
  TagsDialogComponent,
  TagsTableComponent,
];

const components_export = [
];

const routes: Routes = [{
  path: '',
  component: DicomViewerArchiveComponent,
  children: [
    {
      path: 'archive',
      component: DicomViewerArchiveComponent,
    },
    {
      path: 'upload',
      component: null,
    },
  ],
}];

@NgModule({
  imports: [
    ThemeModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ...components,
  ],
  entryComponents: [
    TagsDialogComponent,
  ],
  exports: [
    RouterModule,
    ...components_export,
  ],
})
export class PACSSharedModule { }
