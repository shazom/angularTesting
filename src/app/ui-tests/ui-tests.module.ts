import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTestsComponent } from './ui-tests.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UiTestsComponent],
  exports: [UiTestsComponent]
})
export class UiTestsModule { }
