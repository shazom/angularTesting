import { NotificationComponent } from './notification/notification.component';
import { NgModule } from '@angular/core';
import { GrowlModule, DialogModule } from 'primeng/primeng';
import { CommonModule } from '@angular/common';
import { DebugComponent } from './debug/debug.component';

@NgModule({
  imports: [
    CommonModule,
    GrowlModule,
    DialogModule
  ],
  declarations: [
    NotificationComponent,
    DebugComponent
  ],
  exports: [
    NotificationComponent,
    DebugComponent

  ]
})
export class SharedModule { }
