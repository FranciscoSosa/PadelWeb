
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PendingEventsComponent } from './pending-events/pending-events.component';
import {UserEditProfileComponent} from "./user-edit-profile/user-edit-profile.component";
import { FootherComponent } from './foother/foother.component';
import {ClubAffilatesComponent} from "./club-affilates/club-affilates.component";
import {WhoAreWeComponent} from "./who-are-we/who-are-we.component";
import {FAQComponent} from "./faq/faq.component";
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";
import {MainUserComponent} from "./main-user/main-user.component";
import {UserStatisticsComponent} from "./user-statistics/user-statistics.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import { MainClubComponent } from './main-club/main-club.component';
import { ClubEditProfileComponent } from './club-edit-profile/club-edit-profile.component';
import { ClubConfirmMatchComponent } from './club-confirm-match/club-confirm-match.component';
import { ClubConfirmTournamentComponent } from './club-confirm-tournament/club-confirm-tournament.component';
import { ClubAddTournamentComponent } from './club-add-tournament/club-add-tournament.component';
import { ClubAddMatchComponent } from './club-add-match/club-add-match.component';
import { ClubConfirmResultComponent } from './club-confirm-result/club-confirm-result.component';
import { ClubMatchResultsComponent } from './club-match-results/club-match-results.component';
import {SignInSelectorComponent} from "./sign-in-selector/sign-in-selector.component";
import { ClubSignInComponent } from './club-sign-in/club-sign-in.component';
import { UserChooseDayAndClubComponent } from './user-choose-day-and-club/user-choose-day-and-club.component';
import { UserChooseMatchComponent } from './user-choose-match/user-choose-match.component';
import { ClubRegisterComponent } from './club-register/club-register.component';
import {SignUpComponent} from "./sign-up/sign-up.component";


const routes: Routes = [
  {
    path: "sign-in",
    component: SignInComponent
  },
  {
    path: "sign-up",
    component: SignUpComponent
  },
  {
    path: "sign-in-selector",
    component: SignInSelectorComponent
  },
  {
    path: "club-sign-in",
    component: ClubSignInComponent
  },
  {
    path: "club-register",
    component: ClubRegisterComponent
  },
  {
    path: "user",
    component: MainUserComponent,
    children: [
      {
        path: "",
        redirectTo: "/statistics",
        pathMatch: "full"
      },
      {
        path: "profile",
        component: UserEditProfileComponent
      },
      {
        path: "statistics",
        component: UserStatisticsComponent
      },
      {
        path: "chooseDay",
        component: UserChooseDayAndClubComponent
      },
      {
        path: "chooseMatch/:uid",
        component: UserChooseMatchComponent
      }

    ],
  },
  {
    path: "club-pending-events",
    component: PendingEventsComponent
  },
  {
    path: "club-affilate",
    component: ClubAffilatesComponent
  },
  {
    path: "who-are-we",
    component:WhoAreWeComponent
  },
  {
    path: "FAQ",
    component: FAQComponent
  },
  {
    path: "contact",
    component:ContactComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "club",
    component: MainClubComponent,
    children: [
      {
        path: "profile",
        component: ClubEditProfileComponent
      },
      {
        path: "confirm-match",
        component: ClubConfirmMatchComponent
      },
      {
        path: "confirm-tournament",
        component: ClubConfirmTournamentComponent
      },
      {
        path: "confirm-result",
        component: ClubConfirmResultComponent
      },
      {
        path: "add-tournament",
        component: ClubAddTournamentComponent
      },
      {
        path: "add-match",
        component: ClubAddMatchComponent
      },
      {
        path: "match-results",
        component: ClubMatchResultsComponent
      },
      {
        path: "pending-events",
        component: PendingEventsComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
