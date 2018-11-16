import { Component } from '@angular/core';
import { IconModel } from './icon.model';

@Component({
  selector: 'ngx-day-two-b',
  styleUrls: ['./day-two-b.component.scss'],
  templateUrl: './day-two-b.component.html',
})
export class DayTwoBComponent {
  
  icons: IconModel[] = [
    {
      title : 'Power',
      icon: 'nb-power-circled',
      type: 'success'
    },
    {
      title : 'Flame',
      icon: 'nb-flame-circled',
      type: 'info'
    },
    {
      title : 'Location',
      icon: 'nb-location',
      type: 'warning'
    },
    {
      title : 'Volume',
      icon: 'nb-volume-high',
      type: 'primary'
    }
  ]
}
