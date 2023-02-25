import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntertainmentManagementRoutingModule } from './entertainment-management-routing.module';
import { EntertainmentManagementComponent } from './entertainment-management.component';
import { EntertainmentDefaultComponent } from './components/entertainment-default/entertainment-default.component';
import { EntertainmentRegistrationComponent } from './components/entertainment-registration/entertainment-registration.component';


@NgModule({
  declarations: [
    EntertainmentManagementComponent,
    EntertainmentDefaultComponent,
    EntertainmentRegistrationComponent,

  ],
  imports: [
    CommonModule,
    EntertainmentManagementRoutingModule
  ]
})
export class EntertainmentManagementModule { }
