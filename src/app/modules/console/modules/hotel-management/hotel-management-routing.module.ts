import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HotelManagementComponent} from './hotel-management.component';
import {HotelBasicInfoComponent} from "./components/hotel-registration/hotel-basic-info/hotel-basic-info.component";
import {HotelRegistrationComponent} from "./components/hotel-registration/hotel-registration.component";
import {HotelCategoryComponent} from "./components/hotel-registration/hotel-category/hotel-category.component";
import {HotelRoomCountComponent} from "./components/hotel-registration/hotel-room-count/hotel-room-count.component";
import {
  HotelRoomDescriptionComponent
} from "./components/hotel-registration/hotel-room-description/hotel-room-description.component";


const routes: Routes = [
  {path: '', component: HotelManagementComponent},
  {
    path: 'hotel-registration', component: HotelRegistrationComponent,
    children: [
      {path: 'hotel-category', component:HotelCategoryComponent},
      {path: 'hotel-basic-info', component: HotelBasicInfoComponent},
      {path: 'hotel-room-count', component:HotelRoomCountComponent},
      {path: 'hotel-room-description',component:HotelRoomDescriptionComponent}
    ],
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelManagementRoutingModule {
}
