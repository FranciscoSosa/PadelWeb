import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {environment} from "../../environments/environment";
import { ClubAuthService } from '../services/club-auth.service';
import { ClubService } from '../services/club.service';
import { Club } from '../types/club';
import { Match } from '../types/match';

@Component({
  selector: 'app-club-add-match',
  templateUrl: './club-add-match.component.html',
  styleUrls: ['./club-add-match.component.css'],
  host: {
    class: environment.userPageLayout
  }
})
export class ClubAddMatchComponent implements OnInit {

  private club!: Club | undefined;
  currentDay: number = 0;
  private readonly numberOfHours: number = 9;
  private readonly daysPerWeek: number = 7;
  private readonly days = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"
  ];
  readonly daysPerWeekIndices: number[] = [0, 1, 2, 3, 4, 5, 6];
  readonly hours = [
    "8:30/10:00",
    "10:00/11:30",
    "11:30/13:00",
    "13:00/14:30",
    "14:30/16:00",
    "16:00/17:30",
    "17:30/19:00",
    "19:00/20:30",
    "20:30/22:00",
  ]

  selectedDays: boolean[][] = new Array(this.numberOfHours)
    .fill(false)
    .map(() => new Array(this.daysPerWeek).fill(false));


  constructor(private auth: ClubAuthService, private clubService: ClubService,
     private router: Router) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (club) => { this.club = club }
    );
  }

  submit(): void{
    let i = 0;
    let j = 0;
    for(let hour of this.hours){
      for(let day of this.days){
        if(this.selectedDays[i][j]){
          let match: Match = {
            dayHour: `Día ${day} y hora ${hour}`,
            players: [],
            ranked: true,
            ranking: "Oro",
            img: "assets/images/match.svg"
          }
          this.club?.active.push(match);
          this.clubService.updateClub(this.club?.uid as string, { active: this.club?.active });
        }
        j++;
      }
      i++;
      j = 0;
    }
    this.router.navigate(["/club/confirm-match"]);
  }


  switchDay(direction: "next" | "last") {
    if (direction === "next"){
      this.currentDay = ++this.currentDay % 7;
    }else {
      if(--this.currentDay < 0){
        this.currentDay = 6;
      }
    }
  }
}
