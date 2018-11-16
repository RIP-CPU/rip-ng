import { Component } from '@angular/core';
import { DayOneModel } from './day-one.model';

@Component({
  selector: 'ngx-day-one',
  styleUrls: ['./day-one.component.scss'],
  templateUrl: './day-one.component.html',
})
export class DayOneComponent {
  i:number = 0
  a:any = 0.0
  arr:String[] = [
    "",""
  ]
  data:DayOneModel = {
    id: 1,
    name: "Ridla",
    age: 1
  }
}
