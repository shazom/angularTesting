import { AppConfig } from 'app/app-config.service';
import { CoreModule } from './core/core.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule, Routes } from "@angular/router/";

import { MenubarModule, PanelModule, CalendarModule, DataTableModule, PanelMenuModule, MenuItem, ToolbarModule, ScheduleModule, ChipsModule, InputTextModule, DropdownModule, DialogModule, InplaceModule, FileUploadModule, GrowlModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmptyRowsComponent } from './empty-rows/empty-rows.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { routes } from './app.routes';
import { DataViewComponent } from './data-view/data-view.component';
import { DataFilterComponent } from './data-filter/data-filter.component';
import { LoadInvoiceComponent } from './load-invoice/load-invoice.component';
import { NotificationComponent } from './shared/notification/notification.component';
// import { ProgressbarModule, PopoverModule } from 'ng2-bootstrap';

import { SharedModule } from './shared/shared.module'

@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    EmptyRowsComponent,
    DataTableComponent,
    MainComponent,
    LoginComponent,
    DataViewComponent,
    DataFilterComponent,
    LoadInvoiceComponent

  ],
  imports: [
    GrowlModule,
    BrowserModule,
    ChipsModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    HttpModule,
    RouterModule.forRoot(routes),
    PanelMenuModule,
    InputTextModule,
    PanelModule,
    InplaceModule,
    DropdownModule,
    MenubarModule,
    DialogModule,
    ScheduleModule,
    BrowserAnimationsModule,
    CalendarModule,
    DataTableModule,
    ToolbarModule,

    SharedModule,
    CoreModule
  ],
  providers: [AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule {



}
