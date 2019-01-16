import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dicom-viewer-archive',
  templateUrl: './dicom-viewer-archive.component.html',
  styleUrls: ['./dicom-viewer-archive.component.scss'],
})
export class DicomViewerArchiveComponent implements OnInit {

  public loaders: string[] = [
      'Url',
  ];
  public urls: string[] = [
    'https://raw.githubusercontent.com/RIP-CPU/rip-pacs/master/data/sample.zip',
  ];
  public headers: any;

  ngOnInit() {
  }

}
