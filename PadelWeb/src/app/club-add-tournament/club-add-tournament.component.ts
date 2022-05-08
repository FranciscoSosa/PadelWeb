import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {environment} from "../../environments/environment";
import { ClubAuthService } from '../services/club-auth.service';
import { ClubService } from '../services/club.service';
import { Club } from '../types/club';
import { Tournament } from '../types/tournament';

@Component({
  selector: 'app-club-add-tournament',
  templateUrl: './club-add-tournament.component.html',
  styleUrls: ['./club-add-tournament.component.css'],
  host: {
    class: environment.userPageLayout
  }
})
export class ClubAddTournamentComponent implements OnInit {

  private club!: Club | undefined;

  tournament: Tournament = {
    name: "",
    day: new Date(),
    players: 2,
    ranked: false,
    comments: "",
    img: "assets/images/tournament.svg"
  }

  constructor(private auth: ClubAuthService, private clubService: ClubService,
    private router: Router) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (club) => { this.club = club }
    );
  }

  submit(): void {
    console.log(this.club);
    this.club?.active.push(this.tournament);
    this.clubService.updateClub(this.club?.uid as string, { active: this.club?.active });
    this.router.navigate(["/club/confirm-match"]);
  }
}
