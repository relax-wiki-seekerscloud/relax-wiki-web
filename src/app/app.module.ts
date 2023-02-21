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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HotelComponent,
    ResturentComponent,
    EntertainmentComponent,
    TaxiRentalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
