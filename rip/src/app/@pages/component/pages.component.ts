import { Component } from '@angular/core';

import { NbMenuItem } from '@nebular/theme';
import { AuthStorageService } from '../../@auth/services/auth-storage.service';

@Component({
  selector: 'base-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {

  public menu: NbMenuItem;

  constructor(private storage:AuthStorageService){
    this.menu = JSON.parse(this.storage.getSessionStorage("menus"));
  }

}
