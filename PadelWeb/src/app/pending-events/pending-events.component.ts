import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import { Club } from '../types/club';
import { ClubAuthService } from '../services/club-auth.service';
import { Tournament } from '../types/tournament';
import { Match } from '../types/match';

@Component({
  selector: 'app-pending-events',
  templateUrl: './pending-events.component.html',
  styleUrls: ['./pending-events.component.css'],
  host: {
    class: environment.userPageLayout
  }
})
export class PendingEventsComponent implements OnInit {

  club!: Club | undefined;

  constructor(private auth: ClubAuthService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (club) => { 
        this.club = club;
        console.log(this.club);
      }
    );
  }

  isMatch(event: Tournament | Match){
    return 'dayHour' in event;
  }
}
