import { Component } from '@angular/core';
import { DayTwoModel } from './day-two.model';
import { Router } from '@angular/router';
import { DayTwoService } from '../service/day-two.service';
import { TabModel } from '../day2a/tab.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-day-two',
  styleUrls: ['./day-two.component.scss'],
  templateUrl: './day-two.component.html',
})
export class DayTwoComponent {
 id:number;
 name:String;
 age:any;

  data:DayTwoModel;
  dataTabs:TabModel[] = [{
    title: "Render Tab #1",
    description: "Content #1",
    isView:true
  },{
    title: "Render Tab #2",
    description: "Content #2",
    isView:true
  },{
    title: "Render Tab #3",
    description: "Content #3",
    isView:false
  }]

  form: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    age: new FormControl()
  })

  constructor(private router:Router, private dayTwoService: DayTwoService){}

  submit(){
    /* this.data = {
      id: this.id,
      name: this.name,
      age: this.age
    }
    this.dayTwoService.data = this.data; */
    console.log(JSON.stringify(this.form.value));
    /* console.log(this.form.get('name').value); */
    /* this.dayTwoService.data = this.form.value  */
    this.dayTwoService.data = {
      id: this.form.get('id').value,
      name: this.form.get('name').value,
      age: this.form.get('age').value
    }
    localStorage.setItem("dataModel",JSON.stringify(this.dayTwoService.data))
    console.log(JSON.parse(localStorage.getItem("branch")))
    localStorage.removeItem("branch")

    /* this.router.navigateByUrl('/test/latihan/day-two-result'); */
    this.router.navigate(['/test/latihan/day-two-result',
     this.form.get('id').value, this.form.get('name').value]);
  }

  isChecked(event){
    console.log(event);
  }
}
