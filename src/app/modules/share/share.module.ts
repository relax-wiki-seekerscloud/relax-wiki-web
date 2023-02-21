import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarTwoComponent } from './nav-bar-two/nav-bar-two.component';
import { FooterTwoComponent } from './footer-two/footer-two.component';
import { RelaxwikiLogoComponent } from './relaxwiki-logo/relaxwiki-logo.component';


@NgModule({
  declarations: [
    ShareComponent,
    NavBarComponent,
    FooterComponent,
    NavBarTwoComponent,
    FooterTwoComponent,
    RelaxwikiLogoComponent
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    NavBarTwoComponent,
    FooterTwoComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule
  ]
})
export class ShareModule { }
