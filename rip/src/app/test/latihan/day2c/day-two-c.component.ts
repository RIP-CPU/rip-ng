import { Component, OnInit } from '@angular/core';
import { DayTwoModel } from '../day2/day-two.model';
import { DayTwoService } from '../service/day-two.service';
@Component({
  selector: 'ngx-day-two-c',
  styleUrls: ['./day-two-c.component.scss'],
  templateUrl: './day-two-c.component.html',
})
export class DayTwoCComponent implements OnInit {

  result:DayTwoModel;
  constructor(private dayTwoService:DayTwoService){}

  ngOnInit(): void {
    this.result = this.dayTwoService.data;
  }
}
