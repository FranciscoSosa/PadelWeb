import {Component} from '@angular/core';
import {environment} from "../../environments/environment";
import {User} from "../types/user";
import {AuthService} from "../services/auth.service";
import {Match} from "../types/match";
import {Tournament} from "../types/tournament";

@Component({
  selector: 'app-user-statistics',
  templateUrl: './user-statistics.page.html',
  styleUrls: ['./user-statistics.page.css'],
  host: {
    class: environment.userPageLayout
  }
})
// @ts-ignore
export class UserStatisticsPage implements ionicViewDidEnter {

  userInfo!: User;

  constructor(public auth: AuthService) {
  }

  ionicViewDidEnter(): void {
    this.auth.user$.subscribe(async user => {
      if(user) {
        this.userInfo = user;
      }
    });
  }

  isMatch(event: Match | Tournament) {
    return 'dayHour' in event;
  }

}
