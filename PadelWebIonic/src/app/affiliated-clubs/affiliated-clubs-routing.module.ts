import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AffiliatedClubsPage } from './affiliated-clubs.page';

const routes: Routes = [
  {
    path: '',
    component: AffiliatedClubsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AffiliatedClubsPageRoutingModule {}
