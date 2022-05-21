import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserEventInfoPage } from './user-event-info.page';

const routes: Routes = [
  {
    path: '',
    component: UserEventInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserEventInfoPageRoutingModule {}
