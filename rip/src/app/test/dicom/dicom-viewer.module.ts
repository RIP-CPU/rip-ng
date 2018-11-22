import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { TagsDialogComponent } from './tags-dialog/tags-dialog.component';
import { TagsTableComponent } from './tags-table/tags-table.component';
import { TestDicomViewerComponent } from './dicom-viewer.component';
import { RouterModule, Routes } from '@angular/router';
import { ThemeModule } from '../../@theme/theme.module';

const routes: Routes = [{
  path: '',
  component: TestDicomViewerComponent,
}];

@NgModule({
  declarations: [
    TestDicomViewerComponent,
    TagsDialogComponent,
    TagsTableComponent
  ],
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
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    TagsDialogComponent
  ],
  exports : [
    RouterModule
  ]
})
export class TestDicomViewerModule { }
