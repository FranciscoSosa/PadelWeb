import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserEditProfileComponent} from "./user-edit-profile/user-edit-profile.component";
import {UserStatisticsComponent} from "./user-statistics/user-statistics.component";

const routes: Routes = [
  {
    path: "user-edit-profile",
    component: UserEditProfileComponent
  },
  {
    path: "user-statistics",
    component: UserStatisticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
