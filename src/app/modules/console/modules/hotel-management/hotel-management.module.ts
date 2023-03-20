import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelManagementRoutingModule } from './hotel-management-routing.module';
import { HotelManagementComponent } from './hotel-management.component';
import { HotelDefaultComponent } from './components/hotel-default/hotel-default.component';
import { HotelRegistrationComponent } from './components/hotel-registration/hotel-registration.component';
import { HotelBasicInfoComponent } from './components/hotel-registration/hotel-basic-info/hotel-basic-info.component';
import {ShareModule} from "../../../share/share.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {ContentBoxBorderComponent} from "../../../share/components/content-box-border/content-box-border.component";
import {ContentBoxFillComponent} from "../../../share/components/content-box-fill/content-box-fill.component";
import { ReactiveFormsModule } from '@angular/forms';
import {NgxMatIntlTelInputComponent} from "ngx-mat-intl-tel-input";
import {MatButtonModule} from "@angular/material/button";
import { HotelCategoryComponent } from './components/hotel-registration/hotel-category/hotel-category.component';
import { HotelRoomCountComponent } from './components/hotel-registration/hotel-room-count/hotel-room-count.component';
import { HotelRoomDescriptionComponent } from './components/hotel-registration/hotel-room-description/hotel-room-description.component';
import {MatRadioModule} from "@angular/material/radio";

import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import { HotelSingleViewComponent } from './components/hotel-single-view/hotel-single-view.component';

@NgModule({
    declarations: [
        HotelManagementComponent,
        HotelDefaultComponent,
        HotelRegistrationComponent,
        HotelBasicInfoComponent,
        ContentBoxBorderComponent,
        ContentBoxFillComponent,
        HotelCategoryComponent,
        HotelRoomCountComponent,
        HotelRoomDescriptionComponent,
        HotelSingleViewComponent,
    ],
    exports: [
        HotelRegistrationComponent,
        HotelDefaultComponent

  ],

    imports: [
        CommonModule,
        HotelManagementRoutingModule,
        ShareModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule,
        NgxMatIntlTelInputComponent,
        MatButtonModule,
        MatRadioModule,
        MatCheckboxModule,
        MatIconModule

    ]
})
export class HotelManagementModule { }
