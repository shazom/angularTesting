import { NotificationService } from './notification.service';
import { DataService } from './data.service';
import { UserService } from './user.service';
import { LoggerService } from './logger.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    LoggerService,
    UserService,
    DataService,
    NotificationService
  ],
  declarations: []
})
export class CoreModule { }
