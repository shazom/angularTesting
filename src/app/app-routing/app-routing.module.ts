import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "app/login/login.component";
import { DataViewComponent } from "app/data-view/data-view.component";
import { PageNotFoundComponent } from "app/shared/page-not-found/page-not-found.component";
import { CanActivateGuard } from "app/app-routing/can-activate-via-user.guard";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: DataViewComponent, canActivate: [CanActivateGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  providers: [
    CanActivateGuard
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
