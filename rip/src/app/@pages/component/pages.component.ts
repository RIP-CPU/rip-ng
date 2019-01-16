import { Component, OnInit } from '@angular/core';

import { NbMenuItem } from '@nebular/theme';
import { AuthStorageService } from '../../@auth/services/auth-storage.service';
import { Observable } from 'rxjs';
declare var $: any;

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
export class PagesComponent implements OnInit {

  public menu: NbMenuItem;

  constructor(private storage: AuthStorageService) {
    this.menu = JSON.parse(this.storage.getSessionStorage('menus'));
  }
  ngOnInit() {
    $.ajaxSetup({
      timeout: 15000,
      contentType: 'application/json; charset=utf-8',
      statusCode: {
        400: () => {
          throw Observable.throw('Bad Credentials');
        },
        401: () => {
          throw Observable.throw('Unauthorized');
        },
        404: () => {
          throw Observable.throw('Page Not Found');
        }
      }
    });
  }

}
