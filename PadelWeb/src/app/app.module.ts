import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserEditProfileComponent} from './user-edit-profile/user-edit-profile.component';
import {FormsModule} from "@angular/forms";
import {LoggedAsideComponent} from './logged-aside/logged-aside.component';
import {HttpClientModule} from "@angular/common/http";
import { MainUserComponent } from './main-user/main-user.component';
import { PendingEventsComponent } from './pending-events/pending-events.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    UserEditProfileComponent,
    MainUserComponent,
    PendingEventsComponent,
    LoggedAsideComponent
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
