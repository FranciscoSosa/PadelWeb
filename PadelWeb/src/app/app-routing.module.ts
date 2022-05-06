import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PendingEventsComponent } from './pending-events/pending-events.component';
import {UserEditProfileComponent} from "./user-edit-profile/user-edit-profile.component";
import { FootherComponent } from './foother/foother.component';
import {ClubAffilatesComponent} from "./club-affilates/club-affilates.component";
import {WhoAreWeComponent} from "./who-are-we/who-are-we.component";
import {FAQComponent} from "./faq/faq.component";
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";

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
    path: "club-affilate",
    component: ClubAffilatesComponent
  },
  {
    path: "who-are-we",
    component:WhoAreWeComponent
  },
  {
    path: "FAQ",
    component: FAQComponent
  },
  {
    path: "contact",
    component:ContactComponent
  },
  {
    path: "home",
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
