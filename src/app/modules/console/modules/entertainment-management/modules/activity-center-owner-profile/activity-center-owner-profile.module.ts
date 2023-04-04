import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityCenterOwnerProfileRoutingModule } from './activity-center-owner-profile-routing.module';
import { ActivityCenterOwnerProfileComponent } from './activity-center-owner-profile.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { SalesInformationComponent } from './sales-information/sales-information.component';
import { ActivityNavbarComponent } from './activity-navbar/activity-navbar.component';
import {ShareModule} from "../../../../../share/share.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ActivityCenterOwnerProfileComponent,
    BasicInformationComponent,
    SalesInformationComponent,
    ActivityNavbarComponent
  ],
  imports: [
    CommonModule,
    ActivityCenterOwnerProfileRoutingModule,
    ShareModule,
    FormsModule
  ]
})
export class ActivityCenterOwnerProfileModule { }
