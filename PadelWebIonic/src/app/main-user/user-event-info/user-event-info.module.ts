import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserEventInfoPageRoutingModule } from './user-event-info-routing.module';

import { UserEventInfoPage } from './user-event-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserEventInfoPageRoutingModule
  ],
  declarations: [UserEventInfoPage]
})
export class UserEventInfoPageModule {}
