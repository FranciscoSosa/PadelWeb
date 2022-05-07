import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-club-edit-profile',
  templateUrl: './club-edit-profile.component.html',
  styleUrls: ['./club-edit-profile.component.css']
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
