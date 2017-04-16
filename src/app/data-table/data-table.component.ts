import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  public data: any[];

  public tableEmptyMessage: string;

  constructor() { }

  ngOnInit() {

    this.data = [
      {
        date: "01/2017",
        type: 1,
        invoice: 4001,
        numLines: 200,
        status: "תוכן אינו תקין",
        linkMedia: "12333.pdf"
      },
      {
        date: "12/2016",
        type: 1,
        invoice: 3001,
        numLines: 159,
        status: "נשלחה לקליטה",
        linkMedia: "54654.pdf",
        linkInvoice: "12333.pdf",
      }
    ]

    this.tableEmptyMessage = "לא נמצאו רשומות";
  }

}
