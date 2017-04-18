import { Component, OnInit } from '@angular/core';
import { SelectItem } from "primeng/primeng";

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {

  private sapakim: SelectItem[];

  selectedSapak: SelectItem;

  dialogIsOpened = false;

  constructor() {
    this.sapakim = [
      {
        label: 'אופטיקנה',
        value: {
          id: 1234,
          name: 'אופטיקנה'
        }
      },
      {
        label: 'מרפאת אליאב',
        value: {
          id: 6544,
          name: 'מרפאת אליאב'
        }
      },
      {
        label: 'ניסים משקפיים',
        value: {
          id: 1638,
          name: 'ניסים משקפיים'
        }
      }
    ]
  }

  showDialog() {
    this.dialogIsOpened = true;
  }

  ngOnInit() {
  }

}
