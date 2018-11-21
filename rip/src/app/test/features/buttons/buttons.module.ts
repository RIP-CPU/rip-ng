import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../@theme/theme.module';
import { DefaultButtonsComponent } from './default-buttons/default-buttons.component';
import { HeroButtonComponent } from './hero-buttons/hero-buttons.component';
import { ShapeButtonsComponent } from './shape-buttons/shape-buttons.component';
import { SizeButtonsComponent } from './size-buttons/size-buttons.component';
import { ButtonsComponent } from './buttons.component';
import { DropdownButtonsComponent } from './dropdown-buttons/dropdown-button.component';
import { BlockLevelButtonsComponent } from './block-level-buttons/block-level-buttons.component';
import { ButtonGroupsComponent } from './button-groups/button-groups.component';
import { IconButtonsComponent } from './icon-buttons/icon-buttons.component';
import { ActionGroupsComponent } from './action-groups/action-groups.component';
import { LabeledActionsGroupComponent } from './labeled-actions-group/labeled-actions-group.component';
import { ButtonElementsComponent } from './button-elements/button-elements.component';
import { OutlineButtonsComponent } from './outline-buttons/outline-buttons.component';

const components = [
  ButtonsComponent,
  ActionGroupsComponent,
  BlockLevelButtonsComponent,
  ButtonElementsComponent,
  ButtonGroupsComponent,
  DefaultButtonsComponent,
  DropdownButtonsComponent,
  HeroButtonComponent,
  IconButtonsComponent,
  LabeledActionsGroupComponent,
  OutlineButtonsComponent,
  ShapeButtonsComponent,
  SizeButtonsComponent,
];

@NgModule({
  imports: [
    ThemeModule,
  ],
  exports: [
    ...components,
  ],
  declarations: [
    ...components,
  ],
  providers: [],
})
export class ButtonsModule { }
