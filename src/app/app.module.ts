import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ShareModule} from "./modules/share/share.module";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {SecurityModule} from "./modules/security/security.module";
import {ConsoleModule} from "./modules/console/console.module";
import {HotelManagementModule} from "./modules/console/modules/hotel-management/hotel-management.module";
import {HotelOwnerProfileModule} from "./modules/console/modules/hotel-management/Modules/hotel-owner-profile/hotel-owner-profile.module";

import { MatIconModule } from '@angular/material/icon';
import {UserProfileModule} from "./modules/console/modules/daily-process/modules/user-profile/user-profile.module";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { DropzoneDirective } from './dropzone.directive';
// import {StatusBarComponent} from "./modules/share/components/status-bar/status-bar.component";


@NgModule({
  declarations: [
    AppComponent,
    DropzoneDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    SecurityModule,
    ConsoleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    SecurityModule,
    ConsoleModule,
    HotelManagementModule,
    HotelOwnerProfileModule,
    MatIconModule,
    UserProfileModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),

  ],


  providers: [],
  exports: [
    DropzoneDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

