import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxiRentalManagementRoutingModule } from './taxi-rental-management-routing.module';
import { TaxiRentalManagementComponent } from './taxi-rental-management.component';


@NgModule({
  declarations: [
    TaxiRentalManagementComponent
  ],
  imports: [
    CommonModule,
    TaxiRentalManagementRoutingModule
  ]
})
export class TaxiRentalManagementModule { }
