import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import {FooterComponent} from "./components/footer/footer.component";
import {FooterTwoComponent} from "./components/footer-two/footer-two.component";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {NavBarTwoComponent} from "./components/nav-bar-two/nav-bar-two.component";
import {RelaxwikiLogoComponent} from "./components/relaxwiki-logo/relaxwiki-logo.component";
import { PaymentUserDetailsComponent } from './components/payment-user-details/payment-user-details.component';
import { PaymentCardDetailsComponent } from './components/payment-card-details/payment-card-details.component';
import { PaymentSuccessfulComponent } from './components/payment-successful/payment-successful.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';


@NgModule({
  declarations: [
    ShareComponent,
    FooterComponent,
    FooterTwoComponent,
    NavBarComponent,
    NavBarTwoComponent,
    RelaxwikiLogoComponent,
    PaymentUserDetailsComponent,
    PaymentCardDetailsComponent,
    PaymentSuccessfulComponent,
    FeedbackFormComponent
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
