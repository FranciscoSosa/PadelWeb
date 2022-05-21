import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserChooseDayAndClubPageRoutingModule } from './user-choose-day-and-club-routing.module';

import { UserChooseDayAndClubPage } from './user-choose-day-and-club.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserChooseDayAndClubPageRoutingModule
  ],
  declarations: [UserChooseDayAndClubPage]
})
export class UserChooseDayAndClubPageModule {}
