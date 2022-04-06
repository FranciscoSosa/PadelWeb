import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.css']
})
export class UserEditProfileComponent implements OnInit {

  model = {
    name: "",
    surname: "",
    email: "",
    phone: ""
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  submit(): void {

  }
}
