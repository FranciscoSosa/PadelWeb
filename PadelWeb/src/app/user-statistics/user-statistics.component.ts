import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../types/user";

@Component({
  selector: 'app-user-statistics',
  templateUrl: './user-statistics.component.html',
  styleUrls: ['./user-statistics.component.css']
})
export class UserStatisticsComponent implements OnInit {

  user!: User;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<User>("assets/json/user.json").subscribe(user => {
      this.user = user;
    });
  }

}
