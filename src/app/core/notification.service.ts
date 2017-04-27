import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

export interface Message {
  message: string,
  title?: string,
  severity?: notificationSeverity
}

export enum notificationSeverity { success, info, warn, error }

@Injectable()
export class NotificationService {

  private _messagesSource: Subject<Message>;
  // public messages$: Observable<Message>;

  constructor() {
    this._messagesSource = new Subject<Message>();
    // this.messages$ = this._messagesSource.asObservable();
  }

  get messages$() {
    return this._messagesSource.asObservable();
  }

  notify(message: string | Message) {
    if (typeof message === 'string') {
      this._messagesSource.next({ "message": message });
    } else {
      this._messagesSource.next(<Message>message);
    }        
  }
}
