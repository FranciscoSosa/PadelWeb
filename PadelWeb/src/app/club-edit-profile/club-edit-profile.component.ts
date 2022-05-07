import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-club-edit-profile',
  templateUrl: './club-edit-profile.component.html',
  styleUrls: ['./club-edit-profile.component.css'],
  host: {
    class: environment.userPageLayout
  }
})
export class ClubEditProfileComponent implements OnInit {

  model = {
    name: "",
    email: "",
    phone: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {

  }

}
