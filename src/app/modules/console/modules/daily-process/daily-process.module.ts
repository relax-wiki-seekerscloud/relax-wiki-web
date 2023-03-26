import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyProcessRoutingModule } from './daily-process-routing.module';
import { DailyProcessComponent } from './daily-process.component';


@NgModule({
  declarations: [
    DailyProcessComponent
  ],
  imports: [
    CommonModule,
    DailyProcessRoutingModule
  ]
})
export class DailyProcessModule { }
