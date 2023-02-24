import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import {FooterComponent} from "./components/footer/footer.component";
import {FooterTwoComponent} from "./components/footer-two/footer-two.component";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {NavBarTwoComponent} from "./components/nav-bar-two/nav-bar-two.component";
import {RelaxwikiLogoComponent} from "./components/relaxwiki-logo/relaxwiki-logo.component";


@NgModule({
  declarations: [
    ShareComponent,
    FooterComponent,
    FooterTwoComponent,
    NavBarComponent,
    NavBarTwoComponent,
    RelaxwikiLogoComponent
  ],
  exports: [
    FooterComponent,
    FooterTwoComponent,
    NavBarComponent,
    NavBarTwoComponent,

  ],
  imports: [
    CommonModule,
    ShareRoutingModule
  ]
})
export class ShareModule { }
