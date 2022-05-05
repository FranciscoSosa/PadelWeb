import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserEditProfileComponent} from './user-edit-profile/user-edit-profile.component';
import {FormsModule} from "@angular/forms";
import {UserAsideComponent} from './user-aside/user-aside.component';
import {HttpClientModule} from "@angular/common/http";
import { MainUserComponent } from './main-user/main-user.component';
import { UserStatisticsComponent } from './user-statistics/user-statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    UserEditProfileComponent,
    UserAsideComponent,
    MainUserComponent,
    UserStatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
