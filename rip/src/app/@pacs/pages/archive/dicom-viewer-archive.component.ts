import { Component, OnInit } from '@angular/core';
import { HttpBaseModel } from '../../../@core/models/http-base.model';
import { API } from '../../../config/api.config';

@Component({
  selector: 'dicom-viewer-archive',
  templateUrl: './dicom-viewer-archive.component.html',
  styleUrls: ['./dicom-viewer-archive.component.scss'],
})
export class DicomViewerArchiveComponent implements OnInit {

  public loaders: string[] = [
      'Url',
  ];
  public url: HttpBaseModel = API['pacs']['sample'];

  ngOnInit() {
  }

}
