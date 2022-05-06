import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserEditProfileComponent} from './user-edit-profile/user-edit-profile.component';
import {FormsModule} from "@angular/forms";
import { UserHeaderComponent } from './UserHeader/user-header/user-header.component';

import {HttpClientModule} from "@angular/common/http";


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { environment } from 'src/environments/environment';

import { LoggedAsideComponent } from './logged-aside/logged-aside.component';
import { PendingEventsComponent } from './pending-events/pending-events.component';
import { ClubHeaderComponent } from './UserHeader/club-header/club-header.component';


@NgModule({
  declarations: [
    AppComponent,
    UserEditProfileComponent,
    UserHeaderComponent,
    PendingEventsComponent,
    LoggedAsideComponent,
    ClubHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
