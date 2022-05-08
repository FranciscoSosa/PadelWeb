import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {environment} from "../../environments/environment";
import { ClubAuthService } from '../services/club-auth.service';
import { ClubService } from '../services/club.service';
import { UserService } from '../services/user.service';
import { Club } from '../types/club';
import { Match } from '../types/match';
import { User } from '../types/user';

@Component({
  selector: 'app-club-match-results',
  templateUrl: './club-match-results.component.html',
  styleUrls: ['./club-match-results.component.css'],
  host: {
    class: environment.userPageLayout
  }
})
export class ClubMatchResultsComponent implements OnInit {

  club!: Club;
  playerCheck: boolean[] = new Array(4).fill(false);
  match: Match;
  players: User[] = [];
  private readonly numberOfTeams: number = 2;
  private readonly numberOfSets: number = 3;
  numberOfSetsIndices: number[] = [0, 1 ,2];
  setsResults: number[][] = new Array(this.numberOfTeams)
  .fill(0)
  .map(() => 
      new Array(this.numberOfSets).fill(0)
  );
  
  constructor(private router: Router, private userService: UserService, private auth: ClubAuthService, private clubService: ClubService) { 
    this.match = this.router.getCurrentNavigation()?.extras.state!["match"];
    auth.user$.subscribe(club => {
      if(club){
        this.club = club;
      }
    });
  }

  ngOnInit(): void {
    for (let player of this.match.players){
      this.userService.getUserByUid(player).subscribe(user =>{
        this.players.push(user[0]);
      })
    }
  }

  submit(): void{
    this.club.pending = this.club.pending.filter(e => {
      if('dayHour' in e){
        return e.dayHour !== this.match.dayHour;
      }
      return true;
    });
    this.clubService.updateClub(this.club.uid, this.club);

    let i = 0;
    for(let player of this.players){
      player.pending = player.pending.filter(e => {
        if('dayHour' in e){
          return e.dayHour !== this.match.dayHour;
        }
        return true;
      });
      player.history.push(this.match);
      player.playedGames++;
      if(this.playerCheck[i]){
        player.wonGames++;
      }

      this.userService.updateUser(player.uid, player);
      i++;
    }
    this.router.navigate(['/club/pending-events'])
  }

}
