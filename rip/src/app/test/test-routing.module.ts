import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TestComponent } from './test.component';
import { ChartsComponent } from './charts/charts.component';
import { EchartsComponent } from './charts/echarts.component';
import { D3Component } from './charts/d3.component';
import { ChartjsComponent } from './charts/chartjs.component';
import { TestMapsComponent } from './maps/test-maps.component';
import { GmapsComponent } from '../@maps/gmaps/gmaps.component';
import { LeafletComponent } from '../@maps/leaflet/leaflet.component';
import { BubbleMapComponent } from '../@maps/bubble/bubble-map.component';
import { SearchMapComponent } from '../@maps/search-map/search-map.component';
import { TestEditorsComponent } from './editors/test-editors.component';
import { TinyMCEComponent } from '../@editors/tiny-mce/tiny-mce.component';
import { CKEditorComponent } from '../@editors/ckeditor/ckeditor.component';
import { TestTablesComponent } from './tables/test-tables.component';
import { SmartTableComponent } from '../@tables/smart-table/smart-table.component';

const routes: Routes = [{
  path: '',
  component: TestComponent,
  children: [{
    path: 'dashboard',
    loadChildren: 'app/@dashboard/dashboard.module#DashboardModule',
  },
  {
    path: 'dicom',
    loadChildren: 'app/test/dicom/dicom-viewer.module#TestDicomViewerModule',
  },
  {
    path: 'charts',
    component: ChartsComponent,
    children: [{
        path: 'echarts',
        component: EchartsComponent,
      },
      {
        path: 'd3',
        component: D3Component,
      },
      {
        path: 'chartjs',
        component: ChartjsComponent,
      },
    ],
  }, {
    path: 'features',
    loadChildren: 'app/test/features/test-features.module#TestFeaturesModule',
  }, {
    path: 'maps',
    component: TestMapsComponent,
    children: [{
      path: 'gmaps',
      component: GmapsComponent,
    }, {
      path: 'leaflet',
      component: LeafletComponent,
    }, {
      path: 'bubble',
      component: BubbleMapComponent,
    }, {
      path: 'searchmap',
      component: SearchMapComponent,
    }],
  }, {
    path: 'editors',
    component: TestEditorsComponent,
    children: [{
      path: 'tinymce',
      component: TinyMCEComponent,
    }, {
      path: 'ckeditor',
      component: CKEditorComponent,
    }],
  }, {
    path: 'tables',
    component: TestTablesComponent,
    children: [{
      path: 'smart-table',
      component: SmartTableComponent,
    }],
  }, {
    path: 'modals',
    loadChildren: 'app/test/modal-overlays/modal-overlays.module#ModalOverlaysModule',
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRoutingModule {
}
