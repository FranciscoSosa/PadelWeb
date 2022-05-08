import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';
import { ClubService } from '../services/club.service';
import { UserService } from '../services/user.service';
import { Club } from '../types/club';
import { Match } from '../types/match';
import { Tournament } from '../types/tournament';
import { User } from '../types/user';

@Component({
  selector: 'app-user-choose-match',
  templateUrl: './user-choose-match.component.html',
  styleUrls: ['./user-choose-match.component.css'],
  host: {
    class: environment.userPageLayout
  }
})
export class UserChooseMatchComponent implements OnInit {

  url!: string | null;
  club!: Club;
  user: User | undefined;
  
  constructor(private router: ActivatedRoute, private clubService: ClubService,
    private auth: AuthService, private userService: UserService, private navigator: Router) {
  }
  ngOnInit(): void {
    this.url = this.router.snapshot.paramMap.get('uid');
    this.clubService.getClubByUid(this.url).subscribe(club => {
      this.club= club[0];
    });
    this.auth.user$.subscribe(
      (user) => {
        this.user = user;
        console.log(user);
      }
    );
  }

  isMatch(event: Match | Tournament){
    return 'dayHour' in event;
  }

  select(index: number){
    let event = this.club?.active[index];
    this.user?.pending.push(event);
    this.userService.updateUser(this.user!.uid, {pending: this.user?.pending})
    if('dayHour' in event){
      event.players.push(this.user!.uid);
      if(event.players.length == 4){
        this.club.active.splice(index, 1);
      }
      this.clubService.updateClub(this.url!, {active: this.club.active});
    }
    this.navigator.navigate(["/user/events"]);
  }
}
