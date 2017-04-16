import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-empty-rows',
  templateUrl: './empty-rows.component.html',
  styleUrls: ['./empty-rows.component.css']
})
export class EmptyRowsComponent implements OnInit {

  @Input() length: number;

  constructor() { }

  ngOnInit() {
  }

}
