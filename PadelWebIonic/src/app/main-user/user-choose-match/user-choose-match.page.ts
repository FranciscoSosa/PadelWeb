import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ClubService } from 'src/app/services/club.service';
import { UserService } from 'src/app/services/user.service';
import { Club } from 'src/app/types/club';
import { Match } from 'src/app/types/match';
import { Tournament } from 'src/app/types/tournament';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-user-choose-match',
  templateUrl: './user-choose-match.page.html',
  styleUrls: ['./user-choose-match.page.scss'],
})
export class UserChooseMatchPage implements OnInit {

  url!: string | null;
  club!: Club;
  user: User | undefined;

  constructor(private router: ActivatedRoute, private clubService: ClubService,
    private auth: AuthService, private userService: UserService, private navigator: Router) { }

  ngOnInit() {
    this.url = this.router.snapshot.paramMap.get('uid');
    this.clubService.getClubByUid(this.url).subscribe(club => {
      this.club = club[0];
      console.log(club[0])
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
        this.club.pending.push(event);
        this.clubService.updateClub(this.url!, {pending: this.club.pending});
      }
      this.clubService.updateClub(this.url!, {active: this.club.active});
    }
    this.navigator.navigate(["/main-user/events"]);
  }

}
