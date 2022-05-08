import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-club-confirm-match',
  templateUrl: './club-confirm-match.component.html',
  styleUrls: ['./club-confirm-match.component.css'],
  host: {
    class: environment.userPageLayout
  }
})
export class ClubConfirmMatchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
