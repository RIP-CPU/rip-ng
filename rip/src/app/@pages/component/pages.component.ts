import { Component } from '@angular/core';

import { MENU_ITEMS } from '../models/pages-menu';

@Component({
  selector: 'base-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}
