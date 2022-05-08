import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {environment} from "../../environments/environment";
import { Match } from '../types/match';
import { Tournament } from '../types/tournament';
import { User } from '../types/user';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.css'],
  host: {
    class: environment.userPageLayout
  }
})
export class UserEventsComponent implements OnInit {

  user: User | undefined;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (user) => {
        this.user = user;
        console.log(user);
      }
    );
  }

  isMatch(event: Tournament | Match){
    return 'dayHour' in event;
  }
}
