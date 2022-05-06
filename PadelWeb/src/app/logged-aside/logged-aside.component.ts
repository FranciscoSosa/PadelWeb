import {Component, Input, OnInit} from '@angular/core';
import {User} from "../types/user";
import {HttpClient} from "@angular/common/http";
import {Club} from "../types/club";

@Component({
  selector: 'app-logged-aside',
  templateUrl: './logger-aside.component.html',
  styleUrls: ['./logged-aside.component.css']
})
export class LoggedAsideComponent implements OnInit {

  @Input("infoUrl") infoUrl!: string;

  userInfo!: User;
  clubInfo!: Club;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<User | Club>(this.infoUrl).subscribe(info => {
      if (this.isClub(info)) {
        this.clubInfo = info as Club;
      } else {
        this.userInfo = info as User;
      }
    });
  }

  private isClub(info: User | Club): boolean {
    return 'courts' in info;
  }
}
