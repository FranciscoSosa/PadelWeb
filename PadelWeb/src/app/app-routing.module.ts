import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHeaderComponent } from './Components/UserHeader/user-header/user-header.component';

const routes: Routes = [
  {
    path: "header",
    component: UserHeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
