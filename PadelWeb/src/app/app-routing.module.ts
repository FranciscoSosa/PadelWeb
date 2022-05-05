import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PendingEventsComponent } from './pending-events/pending-events.component';
import {UserEditProfileComponent} from "./user-edit-profile/user-edit-profile.component";
import { FootherComponent } from './foother/foother.component';

const routes: Routes = [
  {
    path: "user-edit-profile",
    component: UserEditProfileComponent
  },
  {
    path: "club-pending-events",
    component: PendingEventsComponent
  },
  {
    path: "home",
    component: FootherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
