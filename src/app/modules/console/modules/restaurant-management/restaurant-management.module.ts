import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantManagementRoutingModule } from './restaurant-management-routing.module';
import { RestaurantManagementComponent } from './restaurant-management.component';
import { RestaurantDefaultComponent } from './components/restaurant-default/restaurant-default.component';
import { RestaurantRegistrationComponent } from './components/restaurant-registration/restaurant-registration.component';
import {FormsModule} from "@angular/forms";
import {ShareModule} from "../../../share/share.module";
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";



@NgModule({
    declarations: [
        RestaurantManagementComponent,
        RestaurantDefaultComponent,
        RestaurantRegistrationComponent,
        RestaurantListComponent,


    ],
    exports: [
        RestaurantDefaultComponent
    ],
  imports: [
    CommonModule,
    RestaurantManagementRoutingModule,
    FormsModule,
    ShareModule,
    MatIconModule,
    MatCheckboxModule
  ]
})
export class RestaurantManagementModule { }
