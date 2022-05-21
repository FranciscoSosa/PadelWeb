import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeHeaderPageRoutingModule } from './home-header-routing.module';

import { HomeHeaderPage } from './home-header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeHeaderPageRoutingModule
  ],
  declarations: [HomeHeaderPage]
})
export class HomeHeaderPageModule {}
