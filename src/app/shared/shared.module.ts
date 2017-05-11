import { NotificationComponent } from './notification/notification.component';
import { NgModule } from '@angular/core';
import { GrowlModule, DialogModule, FileUploadModule } from 'primeng/primeng';
import { CommonModule } from '@angular/common';
import { DebugComponent } from './debug/debug.component';
import { PopoverComponent } from './popover/popover.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from "@angular/router";
import { UploadFileComponent } from './upload-file/upload-file.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

@NgModule({
  imports: [
    CommonModule,
    GrowlModule,
    DialogModule,
    RouterModule,
    FileUploadModule,
    SlimLoadingBarModule.forRoot()
  ],
  declarations: [
    NotificationComponent,
    DebugComponent,
    PopoverComponent,
    PageNotFoundComponent,
    UploadFileComponent,
  ],
  exports: [
    NotificationComponent,
    DebugComponent,
    PopoverComponent,
    PageNotFoundComponent,
    UploadFileComponent,
    SlimLoadingBarModule
  ]
})
export class SharedModule { }
