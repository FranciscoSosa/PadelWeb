import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-club-match-results',
  templateUrl: './club-match-results.component.html',
  styleUrls: ['./club-match-results.component.css'],
  host: {
    class: environment.userPageLayout
  }
})
export class ClubMatchResultsComponent implements OnInit {

  private readonly numberOfTeams: number = 2;
  private readonly numberOfSets: number = 3;
  numberOfSetsIndices: number[] = [0, 1 ,2];
  setsResults: number[][] = new Array(this.numberOfTeams)
  .fill(0)
  .map(() => 
      new Array(this.numberOfSets).fill(0)
  );
  
  constructor() { }

  ngOnInit(): void {
  }

  submit(): void{
    console.log(this.setsResults);
  }

}
