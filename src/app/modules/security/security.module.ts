import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';
import { LoginComponent } from './components/login/login.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import { SignUpComponent } from './components/sign-up/sign-up.component';


@NgModule({
  declarations: [
    SecurityComponent,
    LoginComponent,
    SignUpComponent
  ],
  exports: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    MatFormFieldModule
  ]
})
export class SecurityModule { }
