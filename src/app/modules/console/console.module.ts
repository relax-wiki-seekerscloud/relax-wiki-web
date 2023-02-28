import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import { ConsoleDefaultComponent } from './components/console-default/console-default.component';
import { AdvertisementsComponent } from './components/advertisements/advertisements.component';
import {ShareModule} from "../share/share.module";
import { AdvertisementDefaultComponent } from './components/advertisements/components/advertisement-default/advertisement-default.component';
import { AdvertisementImageComponent } from './components/advertisements/components/advertisement-image/advertisement-image.component';
import { AdvertisementsVideoComponent } from './components/advertisements/components/advertisements-video/advertisements-video.component';
import { AdvertisementPaymentSuccessfulComponent } from './components/advertisements/components/advertisement-payment-successful/advertisement-payment-successful.component';
import { AdvertisementPaymentFaildComponent } from './components/advertisements/components/advertisement-payment-faild/advertisement-payment-faild.component';


@NgModule({
  declarations: [
    ConsoleComponent,
    ConsoleDefaultComponent,
    AdvertisementsComponent,
    AdvertisementDefaultComponent,
    AdvertisementImageComponent,
    AdvertisementsVideoComponent,
    AdvertisementPaymentSuccessfulComponent,
    AdvertisementPaymentFaildComponent
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
