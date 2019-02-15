import { Component, OnInit, Input, ChangeDetectorRef, OnDestroy, Output, EventEmitter, Inject } from '@angular/core';
import { VERSION } from '@angular/core';
import * as dwv from 'dwv';
import * as overlays from 'dwv/locales/en/overlays.json';
import { HTTP_SERVICE } from '../../../@core/core.provider';
import { HttpFactoryService } from '../../../@core/utils/http-factory.service';
import { HttpBaseModel } from '../../../@core/models/http-base.model';
import { NotificationService } from '../../../@core/utils/notification.service';
import { NbToastStatus } from '@nebular/theme/components/toastr/model';
declare var $: any;

// gui overrides

dwv.tool.colourMaps = {
  'plain': dwv.image.lut.plain,
  'invplain': dwv.image.lut.invPlain,
  'rainbow': dwv.image.lut.rainbow,
  'hot': dwv.image.lut.hot,
  'hotiron': dwv.image.lut.hot_iron,
  'pet': dwv.image.lut.pet,
  'hotmetalblue': dwv.image.lut.hot_metal_blue,
  'pet20step': dwv.image.lut.pet_20step,
};

dwv.tool.defaultpresets = {};
// Default window level presets for CT.
dwv.tool.defaultpresets.CT = {
    'mediastinum': {'center': 40, 'width': 400},
    'lung': {'center': -500, 'width': 1500},
    'bone': {'center': 500, 'width': 2000},
    'brain': {'center': 40, 'width': 80},
    'head': {'center': 90, 'width': 350},
};
// decode query
dwv.utils.decodeQuery = dwv.utils.base.decodeQuery;
// Prompt
dwv.gui.prompt = dwv.gui.base.prompt;
// progress
dwv.gui.displayProgress = function () {};
// get element
dwv.gui.getElement = dwv.gui.base.getElement;
// refresh element
dwv.gui.refreshElement = dwv.gui.base.refreshElement;

// post process table
dwv.gui.postProcessTable = dwv.gui.base.postProcessTable;
// Tags table
dwv.gui.DicomTags = dwv.gui.base.DicomTags;
// DrawList table
dwv.gui.DrawList = dwv.gui.base.DrawList;

// Loaders
dwv.gui.Loadbox = dwv.gui.base.Loadbox;
// File loader
dwv.gui.FileLoad = dwv.gui.base.FileLoad;
// File loader
dwv.gui.FolderLoad = dwv.gui.base.FolderLoad;
// Url loader
dwv.gui.UrlLoad =  dwv.gui.base.UrlLoad;

// Window/level
dwv.gui.WindowLevel = dwv.gui.base.WindowLevel;
// Draw
dwv.gui.Draw = dwv.gui.base.Draw;
// ColourTool
dwv.gui.ColourTool = dwv.gui.base.ColourTool;
// ZoomAndPan
dwv.gui.ZoomAndPan = dwv.gui.base.ZoomAndPan;
// Scroll
dwv.gui.Scroll = dwv.gui.base.Scroll;

// Undo/redo
dwv.gui.Undo = dwv.gui.base.Undo;
// Help
dwv.gui.appendHelpHtml = dwv.gui.base.appendHelpHtml;
// Version
dwv.gui.appendVersionHtml = dwv.gui.base.appendVersionHtml;
// Image decoders (for web workers)
dwv.image.decoderScripts = {
    'jpeg2000': '/assets/dwv/decoders/pdfjs/decode-jpeg2000.js',
    'jpeg-lossless': '/assets/dwv/decoders/rii-mango/decode-jpegloss.js',
    'jpeg-baseline': '/assets/dwv/decoders/pdfjs/decode-jpegbaseline.js',
};
dwv.gui.info.overlayMaps = overlays.default;
dwv.gui.plot = function (div, data, options)
{
    const plotOptions = {
        'bars': { 'show': true },
        'grid': { 'backgroundcolor': null, 'markings': null },
        'xaxis': { 'show': true },
        'yaxis': { 'show': false },
    };
    if (typeof options !== 'undefined' &&
        typeof options.markings !== 'undefined') {
        plotOptions.grid.markings = options.markings;
    }
    $.plot(div, [ data ], plotOptions);
};

@Component({
  selector: 'dicom-image-layer',
  templateUrl: './image-layer.component.html',
  styleUrls: ['./image-layer.component.scss'],
})
export class DicomImageLayerComponent implements OnInit, OnDestroy {
  @Input() public tools: any[];
  @Input() public shapes: any[];
  @Input() public loaders: string[];
  @Input() public url: HttpBaseModel;
  @Input() public zip: boolean;
  @Output() public metadata: EventEmitter<any> = new EventEmitter();
  @Output() public dataLoaded: EventEmitter<boolean> = new EventEmitter();
  @Output() public getState: EventEmitter<boolean> = new EventEmitter();
  @Input() public set onState(data: any) {
    if (this.dwvApp && this.stateApp)
      this.getState.emit(this.stateApp.toJSON(this.dwvApp));
  }
  @Input() public set doState(data: any) {
    this.stateData = data;
    if (data && this.dwvApp && this.stateApp && this.loaded)
      this.stateApp.apply(this.dwvApp, this.stateApp.fromJSON(data));
  }
  public selectedTool: string;
  public hasShift: boolean = false;
  public loaded: boolean = false;
  public loadProgress: number = 0;
  public progress: boolean = false;
  public revealed: boolean = false;
  public versions: any;
  private dwvApp: any;
  private stateApp: any;
  private stateData: any;
  private tags: any[];

  constructor(protected cdRef: ChangeDetectorRef,
    @Inject(HTTP_SERVICE)private httpBaseService: HttpFactoryService,
    private notification: NotificationService) {
    this.versions = {
      'dwv': dwv.getVersion(),
      'angular': VERSION.full,
    };
  }

  ngOnDestroy(): void {}

  ngOnInit(): void {
    const tools = [];
    const shapes = [];
    const self = this;
    this.tools.forEach(tool => { tools.push(tool.key); });
    this.tools.pop();
    this.shapes.forEach(shape => { shapes.push(shape.key); });
    if (!this.loaders.includes('File'))
      document.getElementsByClassName('dropBox').item(0).remove();
    // create app
    this.dwvApp = new dwv.App();
    this.stateApp = new dwv.State();
    // initialise app
    this.dwvApp.init({
      'containerDivId': 'dwv',
      'loaders': this.loaders,
      'tools': tools,
      'shapes': shapes,
      'isMobile': true,
      'helpResourcesPath': 'resources/help',
    });
    if (this.url) {
      self.progress = true;
      this.httpBaseService.DOWNLOAD(this.url).toPromise()
      .then((response) => {
        self.dwvApp.loadImageObject([{
          name: this.url.file.filename + this.url.file.extension,
          filename: this.url.file.filename + this.url.file.extension,
          data: response,
        }]);
      }).catch((error) => {
        if (error === 'Page Not Found')
          this.notification.show('DICOM', 'File Not Found', NbToastStatus.DANGER);
      });
    }
    // progress
    this.dwvApp.addEventListener('load-start', function () {
      self.progress = true;
    });
    this.dwvApp.addEventListener('load-progress', function (event) {
      self.loadProgress = event.loaded;
    });
    this.dwvApp.addEventListener('load-end', function () {
      self.onLoadEnd();
      if (self.dwvApp && self.stateApp && self.stateData)
        self.stateApp.apply(self.dwvApp, self.stateApp.fromJSON(self.stateData));
      const div = self.dwvApp.getElement('layerContainer');
      div.addEventListener('drop', function () {
        self.progress = false;
      });
      div.addEventListener('dragover', function () {
        self.dwvApp.reset(() => {});
      });
    });
    if (self.dwvApp.getElement('dropBox')) {
      self.dwvApp.getElement('dropBox').addEventListener('drop', function () {
        self.progress = false;
      });
    }
    this.cdRef.detectChanges();
  }

  onChangeTool(tool): void {
    if (this.dwvApp) {
      this.dwvApp.onChangeTool(
        {
          currentTarget: {
            value: tool.key,
          },
        });
    }
  }

  onChangeShape(shape): void {
    if (this.dwvApp) {
      this.dwvApp.onChangeTool(
        {
          currentTarget: {
            value: 'Draw',
          },
        });
      this.dwvApp.onChangeShape(
        {
          currentTarget: {
            value: shape.key,
          },
        });
    }
  }

  onReset(): void {
    if ( this.dwvApp ) {
      this.dwvApp.onDisplayReset();
    }
  }

  onLoadEnd(): void {
    document.querySelectorAll('div.infoLayer > div > ul').forEach((info: HTMLElement) => {
      info.style.listStyleType = 'none';
      info.style.padding = '0';
      info.style.margin = '0';
    });
    // set data loaded flag
    this.loaded = true;
    this.progress = false;
    this.dataLoaded.emit(this.loaded);
    // set dicom tags
    this.tags = this.dwvApp.getTags();
    this.metadata.emit(this.tags);
    // set the selected tool
    if (this.dwvApp.isMonoSliceData() && this.dwvApp.getImage().getNumberOfFrames() === 1) {
      this.selectedTool = 'Zoom And Pan';
      if (this.tools[0].key === 'Scroll') {
        this.tools.shift();
        this.hasShift = true;
      }
      this.cdRef.detectChanges();
    } else {
      if (this.hasShift) {
        this.tools.unshift({
          key: 'Scroll',
          value: 'Scroll',
          disabled: false,
        });
        this.hasShift = false;
      }
      this.cdRef.detectChanges();
      this.selectedTool = 'Scroll';
    }
  }

}
