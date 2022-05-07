import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-club-confirm-result',
  templateUrl: './club-confirm-result.component.html',
  styleUrls: ['./club-confirm-result.component.css'],
  host: {
    class: environment.userPageLayout
  }
})
export class ClubConfirmResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
