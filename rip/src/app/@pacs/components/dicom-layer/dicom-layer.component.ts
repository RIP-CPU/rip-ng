import {OnInit, Component, Input, OnDestroy, Output, EventEmitter} from '@angular/core';
import { HttpBaseModel } from '../../../@core/models/http-base.model';

@Component({
  selector: 'dicom-layer',
  templateUrl: './dicom-layer.component.html',
  styleUrls: ['./dicom-layer.component.scss'],
})
export class DicomLayerComponent implements OnInit, OnDestroy {
  @Input() public tools: any[] =
    [
      {
        key: 'Scroll',
        value: 'Scroll',
        disabled: false,
      },
      {
        key: 'ZoomAndPan',
        value: 'Zoom And Pan',
        disabled: false,
      },
      {
        key: 'WindowLevel',
        value: 'Window Level',
        disabled: false,
      },
      {
        key: 'Livewire',
        value: 'Livewire',
        disabled: false,
      },
      {
        key: 'Draw',
        value: 'Draw',
        disabled: false,
      },
    ];
  @Input() public shapes: any[] =
    [
      {
        key: 'Ruler',
        value: 'Ruler',
        disabled: false,
      },
      {
        key: 'Arrow',
        value: 'Arrow',
        disabled: false,
      },
      {
        key: 'Protractor',
        value: 'Protractor',
        disabled: false,
      },
      {
        key: 'Rectangle',
        value: 'Rectangle',
        disabled: false,
      },
      {
        key: 'Roi',
        value: 'Roi',
        disabled: false,
      },
      {
        key: 'Ellipse',
        value: 'Ellipse',
        disabled: false,
      },
      {
        key: 'FreeHand',
        value: 'Free Hand',
        disabled: false,
      },
    ];
  @Input() public loaders: string[] =
    [
      'File', 'Url',
    ];
  @Input() public url: HttpBaseModel;
  @Input() public zip: boolean = false;
  @Output() public metadata: EventEmitter<any> = new EventEmitter();
  public revealed: boolean = false;
  public resize: string = 'medium';
  public tags: any[];

  ngOnDestroy(): void {}
  ngOnInit(): void {}

  onTags(tags){
    this.tags = tags;
    this.metadata.emit(tags);
  }

  onLoadedEnd(){
    this.resize = 'large';
  }

  toggleView(): void {
    this.revealed = !this.revealed;
  }
}
