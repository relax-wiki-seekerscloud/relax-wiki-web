import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantManagementRoutingModule } from './restaurant-management-routing.module';
import { RestaurantManagementComponent } from './restaurant-management.component';
import { RestaurantDefaultComponent } from './components/restaurant-default/restaurant-default.component';
import { RestaurantRegistrationComponent } from './components/restaurant-registration/restaurant-registration.component';


@NgModule({
    declarations: [
        RestaurantManagementComponent,
        RestaurantDefaultComponent,
        RestaurantRegistrationComponent
    ],
    exports: [
        RestaurantDefaultComponent
    ],
    imports: [
        CommonModule,
        RestaurantManagementRoutingModule
    ]
})
export class RestaurantManagementModule { }
