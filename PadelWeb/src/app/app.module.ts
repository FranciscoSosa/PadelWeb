import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserEditProfileComponent} from './user-edit-profile/user-edit-profile.component';
import {FormsModule} from "@angular/forms";
<<<<<<< HEAD
import {UserAsideComponent} from './user-aside/user-aside.component';
import { UserHeaderComponent } from './UserHeader/user-header/user-header.component';
=======
import {LoggedAsideComponent} from './logged-aside/logged-aside.component';
>>>>>>> connect-to-firebase
import {HttpClientModule} from "@angular/common/http";
import { PendingEventsComponent } from './pending-events/pending-events.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    UserEditProfileComponent,
<<<<<<< HEAD
    UserAsideComponent,
    UserHeaderComponent
=======
    PendingEventsComponent,
    LoggedAsideComponent
>>>>>>> connect-to-firebase
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
