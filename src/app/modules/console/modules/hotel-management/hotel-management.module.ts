import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelManagementRoutingModule } from './hotel-management-routing.module';
import { HotelManagementComponent } from './hotel-management.component';
import { HotelDefaultComponent } from './components/hotel-default/hotel-default.component';
import { HotelRegistrationComponent } from './components/hotel-registration/hotel-registration.component';

@NgModule({
  declarations: [
    HotelManagementComponent,
    HotelDefaultComponent,
    HotelRegistrationComponent,

  ],
  imports: [
    CommonModule,
    HotelManagementRoutingModule
  ]
})
export class HotelManagementModule { }
