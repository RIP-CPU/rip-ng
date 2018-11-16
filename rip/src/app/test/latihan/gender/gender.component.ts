import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'ngx-gender',
  templateUrl: './gender.component.html',
})
export class GenderComponent {

    @Output() data = new EventEmitter();
    isChecked:boolean = false;

    genderOnChange(){
        this.data.emit(this.isChecked);
    }
}
