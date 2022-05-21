import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserChooseDayAndClubPage } from './user-choose-day-and-club.page';

const routes: Routes = [
  {
    path: '',
    component: UserChooseDayAndClubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserChooseDayAndClubPageRoutingModule {}
