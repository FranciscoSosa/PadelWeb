import { Component, OnInit } from '@angular/core';
import { ClubService } from '../services/club.service';
import { Match } from '../types/match';
import { Tournament } from '../types/tournament';

@Component({
  selector: 'app-club-add-tournament',
  templateUrl: './club-add-tournament.component.html',
  styleUrls: ['./club-add-tournament.component.css']
})
export class ClubAddTournamentComponent implements OnInit {

  tournament: Tournament = {
    name: "",
    day: new Date(),
    players: 2,
    ranked: false,
    comments: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.tournament);
  }
}
