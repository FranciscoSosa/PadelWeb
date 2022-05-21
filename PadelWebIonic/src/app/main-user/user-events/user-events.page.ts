import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Match } from 'src/app/types/match';
import { Tournament } from 'src/app/types/tournament';
import {PendingEventsService} from "../../services/pending-events.service";

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.page.html',
  styleUrls: ['./user-events.page.scss'],
})
export class UserEventsPage implements OnInit {

  events: Match[];

  constructor(
    private auth: AuthService,
    private pendingEvents: PendingEventsService
  ) { }

  ngOnInit() {
    this.pendingEvents.getPendingEvents().subscribe(events => {
      if(events) {
        this.events = events;
      }
    });
  }

  isMatch(event: Tournament | Match){
    return 'dayHour' in event;
  }
}
