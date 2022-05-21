import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainUserPage} from "./main-user.page";
import {UserStatisticsComponent} from "./user-statistics/user-statistics.component";
import { UserHeaderComponent } from './user-header/user-header.component';

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
      }
    ]
  },
  {
    path: 'userChooseClub',
    loadChildren: () => import('./user-choose-day-and-club/user-choose-day-and-club.module').then( m => m.UserChooseDayAndClubPageModule)
  },
  {
    path: 'chooseMatch/:uid',
    loadChildren: () => import('./user-choose-match/user-choose-match.module').then( m => m.UserChooseMatchPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainUserRoutingModule {}