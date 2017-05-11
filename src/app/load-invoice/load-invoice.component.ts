import { SelectItem } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';
import { ServiceName } from "app/app-config.service";

@Component({
  selector: 'app-load-invoice',
  templateUrl: './load-invoice.component.html',
  styleUrls: ['./load-invoice.component.css']
})
export class LoadInvoiceComponent implements OnInit {

  openDialog: boolean = true;  
  months: SelectItem[];
  years: SelectItem[];
  invoiceTypes: SelectItem[];
  selectedMonth: number;
  selectedYear: number;
  selectedInvoiceType: number;

  public service = ServiceName;

  constructor() {

  }

  ngOnInit() {
    let monthsArray = ["ינואר",
      "פברואר",
      "מרץ",
      "אפריל",
      "מאי",
      "יוני",
      "יולי",
      "אוגוסט",
      "ספטמבר",
      "אוקטובר",
      "נובמבר",
      "דצמבר"];
    this.months = Array.from(monthsArray, (arrayLabel, index) => { return { 'label': arrayLabel, 'value': index + 1 } });

    let date = new Date();
    let firstYear = date.getFullYear() - 4;

    this.years = Array.from({ length: 5 }, (emptyValue, index) => { let year = firstYear + index + ""; return { 'label': year, 'value': year } });

    this.selectedMonth = date.getMonth() + 1;
    this.selectedYear = date.getFullYear();

    this.invoiceTypes = [
      { label: "מותר לדיווח", value: "0" },
      { label: "אסור לדיווח", value: "1" }
    ];
  }

  onUploadError(event) {
    console.error(event);
  }

  onUploadSuccess(event) {
    console.log(event);
  }
  



  validate() {
    console.log("validate");
  }

}
