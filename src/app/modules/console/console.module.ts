import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import { ConsoleDefaultComponent } from './components/console-default/console-default.component';
import { AdvertisementsComponent } from './components/advertisements/advertisements.component';
import {ShareModule} from "../share/share.module";


@NgModule({
  declarations: [
    ConsoleComponent,
    ConsoleDefaultComponent,
    AdvertisementsComponent
  ],
  exports: [
    AdvertisementsComponent
  ],
  imports: [
    CommonModule,
    ConsoleRoutingModule,
    ShareModule
  ]
})
export class ConsoleModule { }
