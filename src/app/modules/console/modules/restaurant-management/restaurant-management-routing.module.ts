import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantManagementComponent } from './restaurant-management.component';
import {RestaurantDefaultComponent} from "./components/restaurant-default/restaurant-default.component";
import {RestaurantListComponent} from "./components/restaurant-list/restaurant-list.component";

const routes: Routes = [{ path: '', component: RestaurantManagementComponent},
  {path: 'restaurant-default', component: RestaurantDefaultComponent},
  {path: 'restaurant-list', component: RestaurantListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantManagementRoutingModule { }
