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
import { TagsDialogComponent } from './components/tags-dialog/tags-dialog.component';
import { TagsTableComponent } from './components/tags-table/tags-table.component';
import { DicomLayerComponent } from './components/dicom-layer/dicom-layer.component';
import { DicomViewerUploadComponent } from './pages/upload/dicom-viewer-upload.component';
import { DicomViewerArchiveComponent } from './pages/archive/dicom-viewer-archive.component';
import { DicomViewerComponent } from './pages/dicom-viewer.component';

const components = [
  DicomViewerComponent,
  DicomViewerArchiveComponent,
  DicomViewerUploadComponent,
  TagsDialogComponent,
  TagsTableComponent,
  DicomLayerComponent,
];

const components_export = [
  DicomLayerComponent,
];

const routes: Routes = [{
  path: '',
  component: DicomViewerComponent,
  children: [
    {
      path: 'archive',
      component: DicomViewerArchiveComponent,
    },
    {
      path: 'upload',
      component: DicomViewerUploadComponent,
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
