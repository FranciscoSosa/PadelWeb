import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserChooseMatchPage } from './user-choose-match.page';

const routes: Routes = [
  {
    path: '',
    component: UserChooseMatchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserChooseMatchPageRoutingModule {}
