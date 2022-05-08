import {Component, Input, OnInit} from '@angular/core';
import {User} from "../types/user";
import {HttpClient} from "@angular/common/http";
import {Club} from "../types/club";
import {AuthService} from "../services/auth.service";
import {ClubAuthService} from "../services/club-auth.service";

@Component({
  selector: 'app-logged-aside',
  templateUrl: './logged-aside.component.html',
  styleUrls: ['./logged-aside.component.css']
})
export class LoggedAsideComponent implements OnInit {

  @Input("isClub") isClub!: boolean;

  userInfo!: User;
  clubInfo!: Club;

  constructor(private userService: AuthService, private clubService: ClubAuthService) {
  }

  ngOnInit(): void {
    if(this.isClub) {
      this.userService.user$.subscribe(user => {
        if(user) {
          this.userInfo = user;
        }
      });
    } else {
      this.clubService.user$.subscribe(club => {
        if(club) {
          this.clubInfo = club;
        }
      });
    }
  }
}
