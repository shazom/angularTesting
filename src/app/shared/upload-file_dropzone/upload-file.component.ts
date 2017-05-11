import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Http } from "@angular/http";
import * as Dropzone from "Dropzone";
import { AppConfig } from "app/app-config.service";

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  private _dropzone: Dropzone;

  @Input()
  element: string = ".dropzoneArea";

  @Input()
  url: string = this.config.apiUrlInvoices;

  @Input()
  uploadMultiple: boolean = false;

  @Input()
  maxFileSize: number = 2048;

  @Input()
  clickable: boolean | string = true;

  @Input()
  autoProcessQueue: boolean = true;

  @Input()
  addRemoveLinks: boolean = false;

  @Input()
  createImageThumbnails: boolean = false;

  @Input()
  previewTemplate: string = "<div style='display:none'></div>";

  @Input()
  acceptedFiles: string = "*";

  @Output()
  sending: EventEmitter<boolean>;

  @Output()
  uploadprogress: EventEmitter<number>;

  @Output()
  success: EventEmitter<any>;

  @Output()
  error: EventEmitter<any>;

  constructor(private config: AppConfig) {

    this.sending = new EventEmitter<boolean>();
    this.uploadprogress = new EventEmitter<number>();
    this.success = new EventEmitter<any>();
    this.error = new EventEmitter<any>();

  }

  initDropzone() {

    this._dropzone = new Dropzone(this.element, {
      url: this.url,
      uploadMultiple: this.uploadMultiple,
      maxFilesize: this.maxFileSize,
      clickable: this.clickable,
      autoProcessQueue: this.autoProcessQueue,
      addRemoveLinks: this.addRemoveLinks,
      createImageThumbnails: this.createImageThumbnails,
      previewTemplate: this.previewTemplate,
      acceptedFiles: this.acceptedFiles,
    });

    this._dropzone.on("sending", (file, xhr, formaData) => {

      this.sending.emit(true);

    });

    this._dropzone.on("uploadprogress", (file, progress, bytesSent) => {

      this.uploadprogress.emit(progress);

    });

    this._dropzone.on("success", (file) => {

      this.success.emit(file);

    });

    this._dropzone.on("error", (file, message) => {

      this.error.emit(message);

    });


  }

  ngOnInit() {

    this.initDropzone();

  }
}
