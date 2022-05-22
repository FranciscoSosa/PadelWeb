import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeHeaderPage } from './home-header.page';

const routes: Routes = [
  {
    path: '',
    component: HomeHeaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeHeaderPageRoutingModule {}
