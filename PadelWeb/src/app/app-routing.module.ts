import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PendingEventsComponent } from './pending-events/pending-events.component';
import {UserEditProfileComponent} from "./user-edit-profile/user-edit-profile.component";
import {MainUserComponent} from "./main-user/main-user.component";
import {UserStatisticsComponent} from "./user-statistics/user-statistics.component";
import {SignInComponent} from "./sign-in/sign-in.component";

const routes: Routes = [
  {
    path: "sign-in",
    component: SignInComponent
  },
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
