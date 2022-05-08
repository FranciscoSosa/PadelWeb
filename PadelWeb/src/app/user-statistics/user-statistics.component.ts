import {Component, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";
import {User} from "../types/user";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../services/auth.service";
import {Match} from "../types/match";
import {Tournament} from "../types/tournament";

@Component({
  selector: 'app-user-statistics',
  templateUrl: './user-statistics.component.html',
  styleUrls: ['./user-statistics.component.css'],
  host: {
    class: environment.userPageLayout
  }
})
export class UserStatisticsComponent implements OnInit {

  userInfo!: User;

  constructor(public auth: AuthService) {
  }

  ngOnInit(): void {
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
