import { MenuItem } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public items: MenuItem[];
    public loginMenu: MenuItem[];

    public events: any[];
    public header: any[];
    public data: any[];

    public tableEmptyMessage: string;

    public statusValue: string;

    ngOnInit() {

        this.statusValue = "בדיקה";

        this.header = [
            {
                left: 'title',
                center: '',
                right: 'today prev,next'
            }
        ]
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
                        command: (event) => this.openFile("help.pdf")
                    },
                    {
                        label: 'עזרה בחוות דעת',
                        command: (event) => this.openFile("help_hospitals.pdf")
                    }
                ]
            },
            {
                label: 'אתר מאוחדת'
            }

        ];

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

        this.loginMenu = [
            {
                icon: 'fa-user',
                label: 'לא מחובר'
            }
        ];

        this.events = [
            {
                "title": " ",
                "start": "2016-04-03",
                "end": "2016-04-20"
            }
        ];

        this.tableEmptyMessage = "לא נמצאו רשומות";
    }

    openFile(fileName) {
        window.open("assets/documents/" + fileName);
    }

}


