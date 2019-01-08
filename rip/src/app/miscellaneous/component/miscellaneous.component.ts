import { Component, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-miscellaneous',
  styleUrls: ['miscellaneous.component.scss'],
  templateUrl: './miscellaneous.component.html',
})
export class MiscellaneousComponent implements OnDestroy {

  alive: boolean;
  subscription: any;
  authenticated: boolean;
  token: string;

  constructor(private location: Location) {}

  back(): boolean {
      this.location.back();
      return false;
  }

  ngOnDestroy(): void {
      this.alive = false;
  }

}
