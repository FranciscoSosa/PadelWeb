import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ClubService } from '../services/club.service';
import { Club } from '../types/club';

@Component({
  selector: 'app-user-choose-day-and-club',
  templateUrl: './user-choose-day-and-club.component.html',
  styleUrls: ['./user-choose-day-and-club.component.css'],
  host: {
    class: environment.userPageLayout
  }
})
export class UserChooseDayAndClubComponent implements OnInit {

  currentDay: number = 0;
  private readonly numberOfHours: number = 9;
  private readonly daysPerWeek: number = 7;
  readonly daysPerWeekIndices: number[] = [0, 1, 2, 3, 4, 5, 6];

  clubs: Club[] | undefined;


  selectedDays: boolean[][] = new Array(this.numberOfHours)
    .fill(false)
    .map(() => new Array(this.daysPerWeek).fill(false));


  constructor(private clubService: ClubService) { }

  ngOnInit(): void {
    this.clubService.getClubs().subscribe(club => {
      this.clubs=club;
    })
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
