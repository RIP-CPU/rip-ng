import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TagsDialogComponent } from './tags-dialog/tags-dialog.component';
import * as dwv from 'dwv';
import * as overlays from 'dwv/locales/en/overlays.json';
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
// Filter
dwv.gui.Filter = dwv.gui.base.Filter;

// Filter: threshold
dwv.gui.Threshold = dwv.gui.base.Threshold;
// Filter: sharpen
dwv.gui.Sharpen = dwv.gui.base.Sharpen;
// Filter: sobel
dwv.gui.Sobel = dwv.gui.base.Sobel;

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
  selector: 'test-dicom-viewer',
  templateUrl: './dicom-viewer.component.html',
  styleUrls: ['./dicom-viewer.component.scss'],
})
export class TestDicomViewerComponent implements OnInit {
  public versions: any;
  public tools =
    [
      {
        key: 'Scroll',
        value: 'Scroll',
      },
      {
        key: 'WindowLevel',
        value: 'Window Level',
      },
      {
        key: 'ZoomAndPan',
        value: 'Zoom And Pan',
      },
      {
        key: 'Draw',
        value: 'Draw',
      },
      {
        key: 'Livewire',
        value: 'Livewire',
      },
      {
        key: 'Filter',
        value: 'Filter',
      },
      {
        key: 'Floodfill',
        value: 'Flood Fill',
      },
    ];
  public selectedTool = 'Select Tool';
  public loadProgress = 0;
  public dataLoaded = false;
  private dwvApp: any;
  private tags: any[];

  constructor(public dialog: MatDialog) {
    this.versions = {
      'dwv': dwv.getVersion(),
      'angular': VERSION.full,
    };
  }

  ngOnInit() {
    const tools = [];
    this.tools.forEach(tool => { tools.push(tool.key); });
    // create app
    this.dwvApp = new dwv.App();
    // initialise app
    this.dwvApp.init({
      'containerDivId': 'dwv',
      'loaders': ['File', 'Url'],
      'tools': tools,
      'shapes': ['Arrow', 'Ruler', 'Protractor', 'Rectangle', 'Roi', 'Ellipse', 'FreeHand'],
      'filters': ['Sharpen'],
      'isMobile': true,
      'helpResourcesPath': 'resources/help',
    });
    // progress
    const self = this;
    this.dwvApp.addEventListener('load-progress', function (event) {
      self.loadProgress = event.loaded;
    });
    this.dwvApp.addEventListener('load-end', function (event) {
      // set data loaded flag
      self.dataLoaded = true;
      // set dicom tags
      self.tags = self.dwvApp.getTags();
      // set the selected tool
      if (self.dwvApp.isMonoSliceData() && self.dwvApp.getImage().getNumberOfFrames() === 1) {
        self.selectedTool = 'ZoomAndPan';
      } else {
        self.selectedTool = 'Scroll';
      }
    });
  }

  onChangeTool(tool): void {
    if (this.dwvApp) {
      this.selectedTool = tool;
      this.dwvApp.onChangeTool(
        {
          currentTarget: {
            value: tool,
          },
        });
    }
  }

  onReset(): void {
    if ( this.dwvApp ) {
      this.dwvApp.onDisplayReset();
    }
  }

  openTagsDialog(): void {
    this.dialog.open(TagsDialogComponent,
      {
        width: '80%',
        height: '90%',
        data: { title: 'DICOM Tags', value: this.tags },
      },
    );
  }
}
