import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiscellaneousComponent } from './component/miscellaneous.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { MiscellaneousBlockComponent } from './component/miscellaneous-block/miscellaneous-block.component';

const routes: Routes = [{
  path: '',
  component: MiscellaneousComponent,
  children: [{
    path: '404',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscellaneousRoutingModule { }

export const routedComponents = [
  MiscellaneousComponent,
  MiscellaneousBlockComponent,
  NotFoundComponent,
];
