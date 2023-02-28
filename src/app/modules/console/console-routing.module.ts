import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleComponent } from './console.component';

const routes: Routes = [
  { path: '', component: ConsoleComponent },
  { path: 'hotel-management', loadChildren: () => import('./modules/hotel-management/hotel-management.module').then(m => m.HotelManagementModule) },
  { path: 'entertainment-management', loadChildren: () => import('./modules/entertainment-management/entertainment-management.module').then(m => m.EntertainmentManagementModule) },
  { path: 'restaurant-management', loadChildren: () => import('./modules/restaurant-management/restaurant-management.module').then(m => m.RestaurantManagementModule) },
  { path: 'taxi-rental-management', loadChildren: () => import('./modules/taxi-rental-management/taxi-rental-management.module').then(m => m.TaxiRentalManagementModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsoleRoutingModule { }
