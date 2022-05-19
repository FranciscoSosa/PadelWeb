import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserStatisticsPageRoutingModule } from './user-statistics-routing.module';

import { UserStatisticsPage } from './user-statistics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserStatisticsPageRoutingModule
  ],
  declarations: [UserStatisticsPage]
})
export class UserStatisticsPageModule {}
