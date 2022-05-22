import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MainUserRoutingModule } from './main-user-routing.module';
import { MainUserPage } from './main-user.page';
import { UserStatisticsComponent } from "./user-statistics/user-statistics.component";
import { UserHeaderComponent } from './user-header/user-header.component';
import {EditProfileComponent} from "./edit-profile/edit-profile.component";
import { UserHeaderModule } from './user-header/user-header.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainUserRoutingModule,
    UserHeaderModule
  ],
  exports: [
    UserHeaderComponent
  ],
  declarations: [
    MainUserPage,
    UserStatisticsComponent,
    UserHeaderComponent,
    EditProfileComponent
  ]
})
export class MainUserModule {}
