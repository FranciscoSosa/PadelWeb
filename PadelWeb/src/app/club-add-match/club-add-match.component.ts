import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-club-add-match',
  templateUrl: './club-add-match.component.html',
  styleUrls: ['./club-add-match.component.css'],
  host: {
    class: environment.userPageLayout
  }
})
export class ClubAddMatchComponent implements OnInit {

  currentDay: number = 0;
  private readonly numberOfHours: number = 9;
  private readonly daysPerWeek: number = 7;
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


  constructor() { }

  ngOnInit(): void {

  }

  submit(): void{
    console.log(this.selectedDays);
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
