import { RouterModule, Routes } from '@angular/router';
import { HotelManagementComponent } from './hotel-management.component';
import { HotelDefaultComponent} from "./components/hotel-default/hotel-default.component";
import {NgModule} from '@angular/core';
import {HotelBasicInfoComponent} from "./components/hotel-registration/hotel-basic-info/hotel-basic-info.component";
import {HotelRegistrationComponent} from "./components/hotel-registration/hotel-registration.component";
import {HotelCategoryComponent} from "./components/hotel-registration/hotel-category/hotel-category.component";
import {HotelRoomCountComponent} from "./components/hotel-registration/hotel-room-count/hotel-room-count.component";
import {HotelRoomDescriptionComponent} from "./components/hotel-registration/hotel-room-description/hotel-room-description.component";
import {HotelBookingProcessComponent} from "./components/hotel-booking-process/hotel-booking-process.component";
import {HotelSingleViewComponent} from "./components/hotel-booking-process/hotel-single-view/hotel-single-view.component";
import {HotelBookingSummaryComponent} from "./components/hotel-booking-process/hotel-booking-summary/hotel-booking-summary.component";


const routes: Routes = [
  {path: '', component: HotelManagementComponent},
  {path:'hotel-default', component: HotelDefaultComponent},
  {
    path: 'hotel-registration', component: HotelRegistrationComponent,
    children: [
      {path: 'hotel-category', component:HotelCategoryComponent},
      {path: 'hotel-basic-info', component: HotelBasicInfoComponent},
      {path: 'hotel-room-count', component:HotelRoomCountComponent},
      {path: 'hotel-room-description',component:HotelRoomDescriptionComponent},
    ],
  },
  {path:'hotel-booking-process', component:HotelBookingProcessComponent,
    children:[
      {path: 'hotel-single-view',component: HotelSingleViewComponent},
      {path: 'hotel-booking-summary',component: HotelBookingSummaryComponent},
    ],
  },



];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelManagementRoutingModule {
}
