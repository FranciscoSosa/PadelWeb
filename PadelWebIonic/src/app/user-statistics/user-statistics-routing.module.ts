import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserStatisticsPage } from './user-statistics.page';

const routes: Routes = [
  {
    path: '',
    component: UserStatisticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserStatisticsPageRoutingModule {}
