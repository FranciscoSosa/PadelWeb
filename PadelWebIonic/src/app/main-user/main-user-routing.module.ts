import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainUserPage} from "./main-user.page";
import {UserStatisticsComponent} from "./user-statistics/user-statistics.component";
import { UserHeaderComponent } from './user-header/user-header.component';
import {EditProfileComponent} from "./edit-profile/edit-profile.component";

const routes: Routes = [
  {
    path: '',
    component: MainUserPage,
    children: [
      {
        path: 'statistics',
        component: UserStatisticsComponent
      },
      {
        path: 'header',
        component: UserHeaderComponent,
      },
      {
        path: 'profile',
        component: EditProfileComponent
      },
      {
        path: 'userChooseClub',
        loadChildren: () => import('./user-choose-day-and-club/user-choose-day-and-club.module').then( m => m.UserChooseDayAndClubPageModule)
      },
      {
        path: 'chooseMatch/:uid',
        loadChildren: () => import('./user-choose-match/user-choose-match.module').then( m => m.UserChooseMatchPageModule)
      },
      {
        path: 'events',
        loadChildren: () => import('./user-events/user-events.module').then( m => m.UserEventsPageModule)
      },
      {
        path: 'eventInfo/:uid/:index',
        loadChildren: () => import('./user-event-info/user-event-info.module').then( m => m.UserEventInfoPageModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainUserRoutingModule {}
