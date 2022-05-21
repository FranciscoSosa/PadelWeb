import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Match } from 'src/app/types/match';
import { Tournament } from 'src/app/types/tournament';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.page.html',
  styleUrls: ['./user-events.page.scss'],
})
export class UserEventsPage implements OnInit {

  user: User | undefined;

  constructor(private auth: AuthService) { }

  ngOnInit() {
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
