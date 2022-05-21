import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClubService } from 'src/app/services/club.service';
import { Club } from 'src/app/types/club';
import { Match } from 'src/app/types/match';
import { Tournament } from 'src/app/types/tournament';

@Component({
  selector: 'app-user-event-info',
  templateUrl: './user-event-info.page.html',
  styleUrls: ['./user-event-info.page.scss'],
})
export class UserEventInfoPage implements OnInit {

  index!: number;
  uid!: string | null;
  club!: Club;
  event!: Match |Tournament;

  constructor(private router: ActivatedRoute, private clubService: ClubService) { }

  ngOnInit() {
    this.index = parseInt(this.router.snapshot.paramMap.get('index'));
    this.uid = this.router.snapshot.paramMap.get('uid');
    this.clubService.getClubByUid(this.uid).subscribe(club => {
      this.club = club[0];
      this.event = this.club.active[this.index];
      console.log(club[0])
    });
  }

  isMatch(event: Match | Tournament){
    return 'dayHour' in event;
  }

}
