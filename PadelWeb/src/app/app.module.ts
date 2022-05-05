import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserEditProfileComponent} from './user-edit-profile/user-edit-profile.component';
import {FormsModule} from "@angular/forms";
import {LoggedAsideComponent} from './logged-aside/logged-aside.component';
import {HttpClientModule} from "@angular/common/http";
import { PendingEventsComponent } from './pending-events/pending-events.component';
import { FootherComponent } from './foother/foother.component';

@NgModule({
  declarations: [
    AppComponent,
    UserEditProfileComponent,
    PendingEventsComponent,
    LoggedAsideComponent,
    FootherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
