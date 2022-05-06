import {Component, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";
import {User} from "../types/user";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user-statistics',
  templateUrl: './user-statistics.component.html',
  styleUrls: ['./user-statistics.component.css'],
  host: {
    class: environment.userPageLayout
  }
})
export class UserStatisticsComponent implements OnInit {

  userInfo!: User;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<User>("assets/json/user.json").subscribe(user => {
      this.userInfo = user;
    });
  }

}
