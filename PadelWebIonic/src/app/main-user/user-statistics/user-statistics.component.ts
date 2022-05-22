import {Component} from '@angular/core';
import {environment} from "src/environments/environment";
import {User} from "src/app/types/user";
import {AuthService} from "src/app/services/auth.service";
import {Match} from "src/app/types/match";
import {Tournament} from "src/app/types/tournament";

@Component({
  selector: 'app-user-statistics',
  templateUrl: './user-statistics.component.html',
  styleUrls: ['./user-statistics.component.css'],
  host: {
    class: environment.userPageLayout
  }
})
export class UserStatisticsComponent {

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
