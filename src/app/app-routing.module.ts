import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'console',pathMatch:'full'},
  { path: 'console', loadChildren: () => import('./modules/console/console.module').then(m => m.ConsoleModule) },
  { path: 'share', loadChildren: () => import('./modules/share/share.module').then(m => m.ShareModule) },
  { path: 'security', loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule) },
  { path: 'hotel-owner-profile', loadChildren: () => import('./modules/console/modules/hotel-management/Modules/hotel-owner-profile/hotel-owner-profile.module').then(m => m.HotelOwnerProfileModule) },
  { path: 'daily-process', loadChildren: () => import('./modules/console/modules/daily-process/daily-process.module').then(m => m.DailyProcessModule) },
  { path: 'user-profile', loadChildren: () => import('./modules/console/modules/daily-process/modules/user-profile/user-profile.module').then(m => m.UserProfileModule) },
  { path: 'restaurant-owner-profile', loadChildren: () => import('./modules/console/modules/restaurant-management/modules/restaurant-owner-profile/restaurant-owner-profile.module').then(m => m.RestaurantOwnerProfileModule) },
  { path: 'activity-center-owner-profile', loadChildren: () => import('./modules/console/modules/entertainment-management/modules/activity-center-owner-profile/activity-center-owner-profile.module').then(m => m.ActivityCenterOwnerProfileModule) }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
