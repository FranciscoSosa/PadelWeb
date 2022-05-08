import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserEditProfileComponent} from './user-edit-profile/user-edit-profile.component';
import {FormsModule} from "@angular/forms";
import { UserHeaderComponent } from './UserHeader/user-header/user-header.component';

import {HttpClientModule} from "@angular/common/http";

import { MainUserComponent } from './main-user/main-user.component';
import { UserStatisticsComponent } from './user-statistics/user-statistics.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { environment } from 'src/environments/environment';
import { SignInComponent } from './sign-in/sign-in.component';

import { LoggedAsideComponent } from './logged-aside/logged-aside.component';
import { PendingEventsComponent } from './pending-events/pending-events.component';
import { ClubHeaderComponent } from './UserHeader/club-header/club-header.component';

import { FooterComponent } from './footer/footer.component';

import { MainClubComponent } from './main-club/main-club.component';
import { ClubEditProfileComponent } from './club-edit-profile/club-edit-profile.component';
import { ClubConfirmMatchComponent } from './club-confirm-match/club-confirm-match.component';
import { ClubConfirmTournamentComponent } from './club-confirm-tournament/club-confirm-tournament.component';
import { ClubAddTournamentComponent } from './club-add-tournament/club-add-tournament.component';
import { ClubAddMatchComponent } from './club-add-match/club-add-match.component';
import { ClubConfirmResultComponent } from './club-confirm-result/club-confirm-result.component';
import { ClubMatchResultsComponent } from './club-match-results/club-match-results.component';
import { SignInSelectorComponent } from './sign-in-selector/sign-in-selector.component';
import { ClubSignInComponent } from './club-sign-in/club-sign-in.component';
import { ClubRegisterComponent } from './club-register/club-register.component';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [
    AppComponent,
    UserEditProfileComponent,
    UserHeaderComponent,
    UserStatisticsComponent,
    MainUserComponent,
    PendingEventsComponent,
    LoggedAsideComponent,
    SignInComponent,
    ClubHeaderComponent,
    FooterComponent,
    MainClubComponent,
    ClubEditProfileComponent,
    ClubConfirmMatchComponent,
    ClubConfirmTournamentComponent,
    ClubAddTournamentComponent,
    ClubAddMatchComponent,
    ClubConfirmResultComponent,
    ClubMatchResultsComponent,
    SignInSelectorComponent,
    ClubSignInComponent,
    ClubRegisterComponent,
    SignUpComponent
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
