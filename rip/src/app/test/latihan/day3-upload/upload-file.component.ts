import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpCommonService } from '../../../@common/services/http-common.service';

@Component({
  selector: 'ngx-upload-file',
  styleUrls: ['./upload-file.component.scss'],
  templateUrl: './upload-file.component.html',
})
export class UploadFileComponent {
  @Input() url: string;
  @Input() title: string;
  @Output() file: any = new EventEmitter();
  
  constructor(private http: HttpCommonService){}

  upload(event){
    this.file.emit(event);
  }
}
