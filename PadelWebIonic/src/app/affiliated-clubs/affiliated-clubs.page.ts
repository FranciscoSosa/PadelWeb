import {Component, OnInit} from '@angular/core';
import {ClubService} from "../services/club.service";
import {Club} from "../types/club";

@Component({
  selector: 'app-affiliated-clubs',
  templateUrl: './affiliated-clubs.page.html',
  styleUrls: ['./affiliated-clubs.page.css'],
})
export class AffiliatedClubsPage implements OnInit{

  affiliatedClubs: Club[];

  constructor(private clubService: ClubService) { }

  ngOnInit() {
    this.clubService.getClubs().subscribe(clubs => {
      this.affiliatedClubs = clubs;
    });
  }

}
