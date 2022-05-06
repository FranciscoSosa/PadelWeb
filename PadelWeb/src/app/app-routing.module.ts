import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PendingEventsComponent } from './pending-events/pending-events.component';
import {UserEditProfileComponent} from "./user-edit-profile/user-edit-profile.component";
import {MainUserComponent} from "./main-user/main-user.component";

const routes: Routes = [
  {
    path: "user",
    component: MainUserComponent,
    children: [
      {
        path: "profile",
        component: UserEditProfileComponent
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
