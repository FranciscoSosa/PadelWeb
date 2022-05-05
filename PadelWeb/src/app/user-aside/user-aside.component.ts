import {Component, OnInit} from '@angular/core';
import {User} from "../user/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-aside',
  templateUrl: './user-aside.component.html',
  styleUrls: ['../../styles.css']
})
export class UserAsideComponent implements OnInit {

  userInfo!: User;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<User>("assets/json/user.json").subscribe(user => {
      this.userInfo = user;
    });
  }

}
