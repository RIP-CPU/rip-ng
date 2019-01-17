import { Component, Input } from '@angular/core';

@Component({
  selector: 'tags-body',
  templateUrl: './tags-body.component.html',
  styleUrls: ['./tags-body.component.scss'],
})
export class TagsBodyComponent {
  @Input() public tags: any[];

  constructor() {}

}
