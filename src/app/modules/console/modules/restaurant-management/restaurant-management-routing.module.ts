import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantManagementComponent } from './restaurant-management.component';

const routes: Routes = [{ path: '', component: RestaurantManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantManagementRoutingModule { }
