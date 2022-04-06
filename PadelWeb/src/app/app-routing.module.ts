import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserEditProfileComponent} from "./user-edit-profile/user-edit-profile.component";

const routes: Routes = [
  {
    path: "user-edit-profile",
    component: UserEditProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
