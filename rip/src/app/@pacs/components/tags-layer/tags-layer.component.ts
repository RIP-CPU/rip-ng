import { Component, Input } from '@angular/core';

@Component({
  selector: 'tags-layer',
  template: ` <tags-header>
              </tags-header>
              <tags-body [tags]="tags">
              </tags-body>`,
})
export class TagsLayerComponent {
  @Input() public tags: any[];

  constructor() {}

}
