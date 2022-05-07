import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-club-add-match',
  templateUrl: './club-add-match.component.html',
  styleUrls: ['./club-add-match.component.css']
})
export class ClubAddMatchComponent implements OnInit {

  private readonly numberOfHours: number = 9;
  private readonly daysPerWeek: number = 7; 
  readonly daysPerWeekIndices: number[] = [0, 1, 2, 3, 4, 5, 6];
  selectedDays: boolean[][] = new Array(this.numberOfHours)
    .fill(false)
    .map(() => 
        new Array(this.daysPerWeek).fill(false)
    );
  constructor() { }

  ngOnInit(): void {

  }

  submit(): void{
    console.log(this.selectedDays);
  }
}
