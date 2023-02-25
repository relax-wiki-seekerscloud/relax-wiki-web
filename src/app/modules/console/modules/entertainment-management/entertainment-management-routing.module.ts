import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntertainmentManagementComponent } from './entertainment-management.component';

const routes: Routes = [{ path: '', component: EntertainmentManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntertainmentManagementRoutingModule { }
