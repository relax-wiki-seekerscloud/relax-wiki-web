import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxiRentalManagementComponent } from './taxi-rental-management.component';

const routes: Routes = [{ path: '', component: TaxiRentalManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxiRentalManagementRoutingModule { }
