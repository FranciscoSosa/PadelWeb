import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserChooseMatchPageRoutingModule } from './user-choose-match-routing.module';

import { UserChooseMatchPage } from './user-choose-match.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserChooseMatchPageRoutingModule
  ],
  declarations: [UserChooseMatchPage]
})
export class UserChooseMatchPageModule {}
