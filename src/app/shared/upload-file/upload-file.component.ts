import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Http } from "@angular/http";
import { FileUpload } from 'primeng/primeng';
import { AppConfig, ServiceName } from "app/app-config.service";
import { DataService} from "app/core/data.service";

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  @Input() serviceName: ServiceName;

  @Input() name: string = "files[]";

  @Input() multiple: string = "multiple";
  @Input() accept: string = "image/*,.txt";
  @Input() fileLimit: number;
  @Input() chooseLabel: string = "בחר";
  @Input() uploadLabel: string = "העלה";
  @Input() cancelLabel: string = "בטל";
  @Input() invalidFileTypeMessageSummary = "{0} קובץ שגוי";
  @Input() invalidFileTypeMessageDetail = "ניתן להעלות קובץ תמונה או טקסט בלבד";
  @Input() fileLimitMessageSummary = "כמות קבצים גדולה מדי";
  @Input() fileLimitMessageDetail = "ניתן להעלות עד {0} קבצים בלבד";

  @Output() onBeforeUpload: EventEmitter<any> = new EventEmitter();

  @Output() onBeforeSend: EventEmitter<any> = new EventEmitter();

  @Output() onUpload: EventEmitter<any> = new EventEmitter();

  @Output() onError: EventEmitter<any> = new EventEmitter();

  @Output() onClear: EventEmitter<any> = new EventEmitter();

  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  url: string;

  constructor(private dataService: DataService) {
    
  }


  ngOnInit() {

    this.url = this.dataService.getServiceUrl(this.serviceName);


    let fileLimit: number = this.fileLimit;
    let fileLimitMessageSummary: string = this.fileLimitMessageSummary;
    let fileLimitMessageDetail: string = this.fileLimitMessageDetail;

    FileUpload.prototype.onFileSelect = function (event) {
      this.msgs = [];
      if (!this.multiple) {
        this.files = [];
      }
      var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;

      let isValidFiles: boolean = true;

      if (fileLimit && (this.files.length + files.length) > fileLimit) {
        this.msgs.push({
          severity: 'error',
          summary: fileLimitMessageSummary.replace('{0}', String(fileLimit)),
          detail: fileLimitMessageDetail.replace('{0}', String(fileLimit))
        });
        isValidFiles = false;
        console.log(this.msgs[0].detail);
      }

      if (isValidFiles) {

        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          if (this.validate(file)) {
            if (this.isImage(file)) {
              file.objectURL = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(files[i])));
            }
            this.files.push(files[i]);
          }
        }
      }
      this.onSelect.emit({ originalEvent: event, files: files });
      if (this.hasFiles() && this.auto) {
        this.upload();
      }
    };



//TODO Should convert the XHR call to a regular Angular HTTP service!    
    FileUpload.prototype.upload = function () {
      var _this = this;
      this.msgs = [];
      var xhr = new XMLHttpRequest(), formData = new FormData();
      this.onBeforeUpload.emit({
        'xhr': xhr,
        'formData': formData
      });
      for (var i = 0; i < this.files.length; i++) {
        formData.append(this.name, this.files[i], this.files[i].name);
      }
      xhr.upload.addEventListener('progress', function (e) {
        if (e.lengthComputable) {
          _this.progress = Math.round((e.loaded * 100) / e.total);
        }
      }, false);
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          _this.progress = 0;
          if (xhr.status >= 200 && xhr.status < 300)
            _this.onUpload.emit({ xhr: xhr, files: _this.files });
          else
            _this.onError.emit({ xhr: xhr, files: _this.files });
          _this.clear();
        }
      };
      xhr.open('POST', this.url, true);
      this.onBeforeSend.emit({
        'xhr': xhr,
        'formData': formData
      });
      xhr.send(formData);
    };


  }

}
