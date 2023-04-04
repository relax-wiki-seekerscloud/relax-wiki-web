import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import {ConsoleDefaultComponent} from './components/console-default/console-default.component';
import { AdvertisementsComponent } from './components/advertisements/advertisements.component';
import {ShareModule} from "../share/share.module";
import { AdvertisementDefaultComponent } from './components/advertisements/components/advertisement-default/advertisement-default.component';
import { AdvertisementImageComponent } from './components/advertisements/components/advertisement-image/advertisement-image.component';
import { AdvertisementsVideoComponent } from './components/advertisements/components/advertisements-video/advertisements-video.component';
import { AdvertisementPaymentSuccessfulComponent } from './components/advertisements/components/advertisement-payment-successful/advertisement-payment-successful.component';
import { AdvertisementPaymentFaildComponent } from './components/advertisements/components/advertisement-payment-faild/advertisement-payment-faild.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import { OffersComponent } from './components/offers/offers.component';
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    ConsoleComponent,
    ConsoleDefaultComponent,
    AdvertisementsComponent,
    AdvertisementDefaultComponent,
    AdvertisementImageComponent,
    AdvertisementsVideoComponent,
    AdvertisementPaymentSuccessfulComponent,
    AdvertisementPaymentFaildComponent,
    OffersComponent

  ],
  exports: [
    AdvertisementsComponent
  ],
    imports: [
        CommonModule,
        ConsoleRoutingModule,
        ShareModule,
        MatProgressBarModule,
        MatTooltipModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatMenuModule

    ]
})
export class ConsoleModule { }
