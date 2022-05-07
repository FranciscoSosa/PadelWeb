import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-club-confirm-tournament',
  templateUrl: './club-confirm-tournament.component.html',
  styleUrls: ['./club-confirm-tournament.component.css'],
  host: {
    class: environment.userPageLayout
  }
})
export class ClubConfirmTournamentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
