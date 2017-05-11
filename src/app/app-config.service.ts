import { Injectable } from '@angular/core';

export enum ServiceName {
    login, invoices
}

@Injectable()
export class AppConfig {

    private baseUrl = 'http://localhost/invoicesServer/api';

    getUrl(service: ServiceName): string {

        let url: string = "";

        switch (service) {
            case ServiceName.login: {
                url = '/login';
                break;
            }
            case ServiceName.invoices: {
                url = this.baseUrl + '/invoices'; //TODO until I will change the HTTP method of the invoices
                break;
            }
            default: {
                break;
            }
        }

        return url;
    }

}


