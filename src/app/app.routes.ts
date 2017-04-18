import { LoadInvoiceComponent } from './load-invoice/load-invoice.component';
import { DataViewComponent } from './data-view/data-view.component';
import { LoginComponent } from './login/login.component';
import { DataTableComponent } from './data-table/data-table.component';
import { Routes } from '@angular/router/';

export const routes: Routes = [
    { path: '', redirectTo:'main', pathMatch:'full' },
    { path: 'login', component: LoginComponent },
    { path: 'main', component: DataViewComponent }
];