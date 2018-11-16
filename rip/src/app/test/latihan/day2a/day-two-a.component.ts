import { Component, Input } from '@angular/core';
import { TabModel } from './tab.model';

@Component({
  selector: 'ngx-day-two-a',
  styleUrls: ['./day-two-a.component.scss'],
  templateUrl: './day-two-a.component.html',
})
export class DayTwoAComponent {
  @Input() tabs:TabModel[];
}
