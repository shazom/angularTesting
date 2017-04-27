import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Message } from 'primeng/primeng';
import { NotificationService, notificationSeverity } from './../../core/notification.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, OnDestroy {

  msgs: Message[] = [];

  private notificationSubscription: Subscription;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  
  constructor(private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.notificationService.messages$
      .takeUntil(this.ngUnsubscribe)  
      .subscribe(
      serviceMessage => {
        let message: Message = {
          severity: notificationSeverity[serviceMessage.severity],
          summary: serviceMessage.title,
          detail: serviceMessage.message
        };

        this.msgs.push(message);

      }
    )
  }

  ngOnDestroy(): void {
    // this.notificationSubscription.unsubscribe();
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }


}
