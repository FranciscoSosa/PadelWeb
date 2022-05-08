import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ClubService } from '../services/club.service';
import { Club } from '../types/club';
import { Match } from '../types/match';
import { Tournament } from '../types/tournament';

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
  club: Club | undefined;
  
  constructor(private router: ActivatedRoute, private db: ClubService) {
  }
  ngOnInit(): void {
    this.url = this.router.snapshot.paramMap.get('uid');
    this.db.getClubByUid(this.url).subscribe(club => {
      this.club= club[0];
    });
  }

  isMatch(event: Match | Tournament){
    return 'dayHour' in event;
  }
}
