import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ShareModule} from "./modules/share/share.module";
import { HomePageComponent } from './modules/main/home-page/home-page.component';
import { HotelComponent } from './modules/main/hotel/hotel.component';
import { ResturentComponent } from './modules/main/resturent/resturent.component';
import { EntertainmentComponent } from './modules/main/entertainment/entertainment.component';
import { TaxiRentalComponent } from './modules/main/taxi-rental/taxi-rental.component';
import { AdvertisementsComponent } from './modules/main/advertisements/advertisements.component';
import {FormsModule} from "@angular/forms";
import {LoginPageComponent} from "./modules/Main/login-page/login-page.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {SignUpPageComponent} from "./modules/Main/sign-up-page/sign-up-page.component";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HotelComponent,
    ResturentComponent,
    EntertainmentComponent,
    TaxiRentalComponent,

    AdvertisementsComponent,
    SignUpPageComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
