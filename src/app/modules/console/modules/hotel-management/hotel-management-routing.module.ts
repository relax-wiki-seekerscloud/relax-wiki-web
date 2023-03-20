import { RouterModule, Routes } from '@angular/router';
import { HotelManagementComponent } from './hotel-management.component';
import { HotelDefaultComponent} from "./components/hotel-default/hotel-default.component";
import {NgModule} from '@angular/core';
import {HotelBasicInfoComponent} from "./components/hotel-registration/hotel-basic-info/hotel-basic-info.component";
import {HotelRegistrationComponent} from "./components/hotel-registration/hotel-registration.component";
import {HotelCategoryComponent} from "./components/hotel-registration/hotel-category/hotel-category.component";
import {HotelRoomCountComponent} from "./components/hotel-registration/hotel-room-count/hotel-room-count.component";
import {HotelRoomDescriptionComponent} from "./components/hotel-registration/hotel-room-description/hotel-room-description.component";
import {HotelSingleViewComponent} from "./components/hotel-single-view/hotel-single-view.component";


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
  {path: 'hotel-single-view',component:HotelSingleViewComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelManagementRoutingModule {
}
