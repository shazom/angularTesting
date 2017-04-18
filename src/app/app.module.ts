
import { AppComponent } from './app.component';
import { MenubarModule, CalendarModule, SharedModule, DataTableModule } from 'primeng/primeng';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { ButtonsModule } from 'ng2-bootstrap/buttons';

// import { AccordionModule } from 'ng2-bootstrap/accordion';

// import {DropdownModule } from 'ng2-bootstrap/dropdown';

import { UiTestsModule } from './ui-tests/ui-tests.module';
import { PanelModule } from "primeng/components/panel/panel";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule, Routes } from "@angular/router/";

import { PanelMenuModule, MenuItem, ToolbarModule, ScheduleModule, ChipsModule, InputTextModule, DropdownModule, DialogModule, InplaceModule } from 'primeng/primeng';
import { HeaderComponent } from './header/header.component';
import { EmptyRowsComponent } from './empty-rows/empty-rows.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';


import { routes } from './app.routes';
import { DataViewComponent } from './data-view/data-view.component';
import { DataFilterComponent } from './data-filter/data-filter.component';
import { LoadInvoiceComponent } from './load-invoice/load-invoice.component';
// import { ProgressbarModule, PopoverModule } from 'ng2-bootstrap';

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
    BrowserModule,
    ChipsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    UiTestsModule,
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
    SharedModule,
    ToolbarModule
    // ButtonsModule.forRoot(),
    // AccordionModule.forRoot(),
    // DropdownModule.forRoot(),
    // ProgressbarModule.forRoot(),
    // PopoverModule.forRoot()
    // Ng2BootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



}
