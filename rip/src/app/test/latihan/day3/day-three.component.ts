import { Component, OnInit, Inject } from '@angular/core';
import { DayThreeModel } from './day-two.model';
import { API } from '../../../config/api.config';
import { HttpFactoryService } from '../../../@common/services/http-factory.service';
import { HTTP_SERVICE } from '../../../app.provider';

@Component({
  selector: 'ngx-day-three',
  styleUrls: ['./day-three.component.scss'],
  templateUrl: './day-three.component.html',
})
export class DayThreeComponent implements OnInit {
  data:DayThreeModel = new DayThreeModel();
  urlUpload = ""
  
  constructor(@Inject(HTTP_SERVICE)private http:HttpFactoryService){}

  ngOnInit(): void {
    var body: DayThreeModel = {
      id: 23,
      name: "Ridla F",
      age: 22
    }
    this.http.HTTP_REQUEST(API["sample"]["get"])
    .subscribe((response: Response)=>{
      console.log(response["id"]);
      console.log(response["name"]);
      console.log(response["age"]);
      this.data.id = response["id"];
      this.data.name = response["name"];
      this.data.age = response["age"];
    })
  }

  uploadFile(event){
    console.log(event);
    console.log(event.target.files[0]);
    let body: FormData = new FormData();
    body.append("file", event.target.files[0]);
    this.http.HTTP_REQUEST(API["sample"]["post"], body).subscribe((response: Response)=>{
      console.log(response);
    })
  }
}
