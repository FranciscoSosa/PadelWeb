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
import { ClubAffilatesComponent } from './club-affilates/club-affilates.component';
import { HeaderComponent } from './header/header.component';
import { WhoAreWeComponent } from './who-are-we/who-are-we.component';
import { FAQComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserEditProfileComponent,
    PendingEventsComponent,
    LoggedAsideComponent,
    FootherComponent,
    ClubAffilatesComponent,
    HeaderComponent,
    WhoAreWeComponent,
    FAQComponent,
    ContactComponent,
    HomeComponent
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
