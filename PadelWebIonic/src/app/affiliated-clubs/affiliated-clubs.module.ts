import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AffiliatedClubsPageRoutingModule } from './affiliated-clubs-routing.module';

import { AffiliatedClubsPage } from './affiliated-clubs.page';
import {MainUserModule} from "../main-user/main-user.module";
import { HomeHeaderPageModule } from '../home-header/home-header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AffiliatedClubsPageRoutingModule,
        MainUserModule,
        HomeHeaderPageModule
    ],
  declarations: [AffiliatedClubsPage]
})
export class AffiliatedClubsPageModule {}
