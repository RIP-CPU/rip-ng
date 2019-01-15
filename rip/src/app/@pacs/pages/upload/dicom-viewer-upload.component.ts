import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dicom-viewer-upload',
  templateUrl: './dicom-viewer-upload.component.html',
  styleUrls: ['./dicom-viewer-upload.component.scss'],
})
export class DicomViewerUploadComponent implements OnInit {

  public loaders: string[] = [
      'File',
  ];

  ngOnInit() {
  }

}
