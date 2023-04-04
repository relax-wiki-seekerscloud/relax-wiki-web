import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelOwnerProfileRoutingModule } from './hotel-owner-profile-routing.module';
import { HotelOwnerProfileComponent } from './hotel-owner-profile.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { SalesInformationComponent } from './sales-information/sales-information.component';



import { HotelProfileNavbarComponent } from './hotel-profile-navbar/hotel-profile-navbar.component';
import { HotelProfileChipsComponent } from './basic-information/hotel-profile-chips/hotel-profile-chips.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import { FormsModule } from '@angular/forms';
import {ShareModule} from "../../../../../share/share.module";


@NgModule({
  declarations: [
    HotelOwnerProfileComponent,
    BasicInformationComponent,
    SalesInformationComponent,



    HotelProfileNavbarComponent,
    HotelProfileChipsComponent,


  ],
  exports: [
    HotelOwnerProfileComponent,
    HotelProfileChipsComponent
  ],
  imports: [
    CommonModule,
    HotelOwnerProfileRoutingModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    FormsModule,
    ShareModule
  ]
})
export class HotelOwnerProfileModule { }
