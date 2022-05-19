import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MainUserRoutingModule } from './main-user-routing.module';
import { MainUserPage } from './main-user.page';
import { UserStatisticsComponent } from "./user-statistics/user-statistics.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainUserRoutingModule
  ],
  declarations: [
    MainUserPage,
    UserStatisticsComponent
  ]
})
export class MainUserModule {}
