import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareComponent } from './share.component';

const routes: Routes = [{ path: '', component: ShareComponent }, { path: 'chat', loadChildren: () => import('./modules/chat/chat.module').then(m => m.ChatModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareRoutingModule { }
