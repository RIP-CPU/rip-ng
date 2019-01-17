import { Component, OnInit } from '@angular/core';
import { HttpBaseModel } from '../../../@core/models/http-base.model';
import { API } from '../../../config/api.config';

@Component({
  selector: 'dicom-viewer-archive',
  templateUrl: './dicom-viewer-archive.component.html',
  styleUrls: ['./dicom-viewer-archive.component.scss'],
})
export class DicomViewerArchiveComponent implements OnInit {
  
  public stateTrigger: boolean = false;
  public stateData: any =
  '{"version":"0.3","window-center":549,"window-width":915,"position":{"i":129,"j":158,"k":5},'+
  '"scale":1.3584000000000003,"scaleCenter":{"x":302,"y":210},"translation":{"x":0,"y":0},'+
  '"drawings":{"attrs":{"listening":false,"hitGraphEnabled":false,'+
  '"visible":true},"className":"Layer","children":[{"attrs":{"name":"position-group",'+
  '"id":"slice-3_frame-0","visible":false},'+
  '"className":"Group","children":[{"attrs":{"name":"roi-group",'+
  '"visible":true,"id":"xuzwhmtf779"},"className":"Group",'+
  '"children":[{"attrs":{"points":[86,57,85,56,84,55,83,54,82,53,81,53,'+
  '80,53,79,54,78,55,77,55,76,56,75,56,74,56,73,57,72,58,'+
  '71,59,72,60,71,60,70,60,69,60,68,60,67,60,66,61,65,62,64,62,63,63,62,'+
  '64,62,65,61,66,61,67,61,68,60,69,60,70,60,71,60,72,61,73,'+
  '61,74,61,75,61,76,62,77,62,78,63,79,64,80,64,81,65,82,66,83,67,84,'+
  '67,85,67,86,68,87,68,88,67,89,66,90,65,91,65,92,64,93,65,'+
  '94,66,95,67,96,68,97,68,98,68,99,68,100,67,101,67,102,67,103,66,'+
  '104,65,105,65,106,65,107,66,107,67,107,68,108,69,109,70,'+
  '109,71,110,72,111,73,112,74,112,75,113,76,113,77,114,78,114,79,114,80,'+
  '114,81,114,82,113,83,112,84,111,85,110,86,109,87,109,'+
  '88,108,89,108,90,107,91,106,92,106,93,105,94,104,94,103,95,102,96,'+
  '101,97,100,98,99,99,98,100,97,101,97,102,96,103,96,104,95,'+
  '105,95,106,95,107,95,108,95,109,95,110,95,111,95,112,95,113,95,'+
  '114,96,115,96,116,97,117,97,118,96,119,96,120,96,121,96,122,'+
  '96,123,96,124,95,125,95,126,95,127,95,128,96,129,97,130,98,131,99,'+
  '132,100,133,101,133,102,134,103,137,103,138,102,138,101,'+
  '137,100,136,99,137,98,138,97,138,96,139,95,140,94,140,93,139,92,138,'+
  '91,137,90,137,89,137,88,137,87,138,86,139,85,140,84,'+
  '141,83,141,82,141,81,142,80,143,79,143,78,143,77,143,76,144,75,144,'+
  '74,143,73,142,72,142,71,141,70,140,69,139,68,140,67,'+
  '141,66,141,65,141,64,141,63,141,62,142,61,143,60,144,59,145,58,145,'+
  '57,145,56,145,56,145,55,145,54,145,53,145,52,145,51,'+
  '145,50,145,49,145,48,145,47,145,46,144,45,143,44,142,44,141,43,140,43,'+
  '139,43,138,42,137,42,136,42,135,42,134,41,133,41,'+
  '132,41,131,42,130,42,129,42,128,43,127,43,126,44,125,45,124,46,123,'+
  '46,122,46,121,46,120,45,119,45,118,44,117,43,116,43,'+
  '115,43,114,43,113,43,112,43,111,44,110,44,109,45,108,45,107,46,'+
  '107,47,106,48,105,48,104,48,103,47,102,47,101,47,100,48,'+
  '99,48,98,49,97,50,96,51,95,52,94,53,93,54,92,55,91,56,'+
  '90,57,89,57,88,58,86,57],"stroke":"#ffff80","name":"shape",'+
  '"closed":true},"className":"Line"},{"attrs":{"x":86,"y":67,"name":"label"},"className":"Label",'+
  '"children":[{"attrs":{"fontFamily":"Verdana","fill":"#ffff80",'+
  '"name":"text"},"className":"Text"},{"attrs":{"height":12},"className":"Tag"}]}]}]},'+
  '{"attrs":{"name":"position-group","id":"slice-4_frame-0","visible":false},'+
  '"className":"Group","children":[{"attrs":{"name":"ruler-group","visible":true,'+
  '"id":"t54b4ein02h"},"className":"Group","children":[{"attrs":{"points":[87,76,151,62],'+
  '"stroke":"#ffff80","name":"shape"},"className":"Line"},'+
  '{"attrs":{"points":[84.86303121194568,66.23099982603742,89.13696878805432,85.76900017396264],'+
  '"stroke":"#ffff80","name":"shape-tick0"},"className":"Line"},'+
  '{"attrs":{"points":[148.86303121194567,52.23099982603742,153.13696878805433,71.7690001739627],'+
  '"stroke":"#ffff80","name":"shape-tick1"},"className":"Line"},'+
  '{"attrs":{"x":126,"y":47,"name":"label"},"className":"Label",'+
  '"children":[{"attrs":{"fontFamily":"Verdana","fill":"#ffff80",'+
  '"name":"text","text":"65.51"},"className":"Text"},{"attrs":{"width":34.880859375,'+
  '"height":12},"className":"Tag"}]}]}]}]},"drawingsDetails":{"xuzwhmtf779":{"textExpr":"",'+
  '"longText":"","quant":null},"t54b4ein02h":{"textExpr":"{length}","longText":"",'+
  '"quant":{"length":{"value":65.5133574166368}}}}}';
  public loaders: string[] = [
      'Url',
  ];
  public url: HttpBaseModel = API['pacs']['sample'];

  ngOnInit() {
  }

  onState() {
    this.stateTrigger = !this.stateTrigger;
  }

  onGetState(data: any) {
    console.log(data);
  }

}
