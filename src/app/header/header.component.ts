import { MenuItem } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';
import { UserService } from "app/core/user.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public items: MenuItem[];

    private loggedIn: boolean = false;

    constructor(
        private userService: UserService
    ) { }

    private checkLogIn(): void {
        
        this.userService.isLoggedIn().subscribe(
            value => { this.loggedIn = value;}
        );
    }

    private logout() {
        this.userService.logout();
    }


    ngOnInit() {

        this.checkLogIn();

        this.items = [
            {
                icon: 'fa-credit-card',
                url: "/main/"
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
