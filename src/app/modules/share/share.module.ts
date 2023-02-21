import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    ShareComponent,
    NavBarComponent,
    FooterComponent
  ],
    exports: [
        NavBarComponent,
        FooterComponent
    ],
  imports: [
    CommonModule,
    ShareRoutingModule
  ]
})
export class ShareModule { }
