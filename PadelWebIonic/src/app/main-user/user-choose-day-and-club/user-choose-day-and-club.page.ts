import { Component, OnInit } from '@angular/core';
import { ClubService } from 'src/app/services/club.service';
import { Club } from 'src/app/types/club';

@Component({
  selector: 'app-user-choose-day-and-club',
  templateUrl: './user-choose-day-and-club.page.html',
  styleUrls: ['./user-choose-day-and-club.page.scss'],
})
export class UserChooseDayAndClubPage implements OnInit {

  clubs: Club[] | undefined;

  constructor(private clubService: ClubService) { }

  ngOnInit() {
    this.clubService.getClubs().subscribe(club => {
      this.clubs=club;
    })
  }

}
