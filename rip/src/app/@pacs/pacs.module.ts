import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeModule } from '../@theme/theme.module';
import { DicomLayerComponent } from './components/dicom-layer/dicom-layer.component';
import { DicomViewerUploadComponent } from './pages/upload/dicom-viewer-upload.component';
import { DicomViewerArchiveComponent } from './pages/archive/dicom-viewer-archive.component';
import { DicomViewerComponent } from './pages/dicom-viewer.component';
import { DicomImageLayerComponent } from './components/image-layer/image-layer.component';
import { TagsLayerComponent } from './components/tags-layer/tags-layer.component';
import { TagsHeaderComponent } from './components/tags-layer/tags-header.component';
import { TagsBodyComponent } from './components/tags-layer/tags-body.component';

const components = [
  DicomViewerComponent,
  DicomViewerArchiveComponent,
  DicomViewerUploadComponent,
  TagsHeaderComponent,
  TagsBodyComponent,
  TagsLayerComponent,
  DicomImageLayerComponent,
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
    RouterModule.forChild(routes),
  ],
  declarations: [
    ...components,
  ],
  entryComponents: [
    DicomImageLayerComponent,
    TagsLayerComponent,
  ],
  exports: [
    RouterModule,
    ...components_export,
  ],
})
export class PACSSharedModule { }
