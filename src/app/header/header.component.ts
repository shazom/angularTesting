import { MenuItem } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public items: MenuItem[];

  constructor() { }

  ngOnInit() {

     this.items = [
            {
                icon: 'fa-credit-card',
                url: "http://localhost:4200/"
                // label: 'מערכת ספקים',
            },
            {
                label: 'עזרה',
                items: [
                    {
                        label: 'עזרה למערכת',
                        // command: (event) => this.openFile("help.pdf")
                    },
                    {
                        label: 'עזרה בחוות דעת',
                        // command: (event) => this.openFile("help_hospitals.pdf")
                    }
                ]
            },
            {
                label: 'אתר מאוחדת'
            }

        ];

  }

}
