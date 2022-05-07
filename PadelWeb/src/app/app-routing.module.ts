
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PendingEventsComponent } from './pending-events/pending-events.component';
import {UserEditProfileComponent} from "./user-edit-profile/user-edit-profile.component";
import {MainUserComponent} from "./main-user/main-user.component";
import {UserStatisticsComponent} from "./user-statistics/user-statistics.component";
import { MainClubComponent } from './main-club/main-club.component';
import { ClubEditProfileComponent } from './club-edit-profile/club-edit-profile.component';
import { ClubConfirmMatchComponent } from './club-confirm-match/club-confirm-match.component';
import { ClubConfirmTournamentComponent } from './club-confirm-tournament/club-confirm-tournament.component';
import { ClubAddTournamentComponent } from './club-add-tournament/club-add-tournament.component';
import { ClubAddMatchComponent } from './club-add-match/club-add-match.component';
import { ClubConfirmResultComponent } from './club-confirm-result/club-confirm-result.component';
import { ClubMatchResultsComponent } from './club-match-results/club-match-results.component';

const routes: Routes = [
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
      }
    ],
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
