import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css'],
  animations: [
    trigger('fade', [
      state('appear', style({
        opacity: '30',
        // transform: 'scale(5)'
      })),
      state('dissapear', style({
        opacity: '0',
        // transform: 'scale(1.2)',
      })),
      transition('dissapear<=>appear', animate('100ms ease-in')),
    ]),
  ]
})

export class PopoverComponent implements OnInit, OnDestroy {

  @Input() message;
  @Input() type = "error";
  @Output() clickEvent;

  fadeState: string = 'dissapear';

  constructor() {
    this.clickEvent = new EventEmitter();
  }

  ngOnInit() {
    this.fadeState = 'appear';
  }

  ngOnDestroy(): void {
    this.fadeState = 'dissapear';
  }


}
