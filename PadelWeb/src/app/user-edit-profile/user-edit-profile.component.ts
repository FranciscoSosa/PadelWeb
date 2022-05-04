import { Component, OnInit} from '@angular/core';
import {  DataUserService } from 'src/app/services/user.service'


@Component({
  selector: 'app-types-edit-profile',
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

  constructor(private dbService:DataUserService){

  }

  ngOnInit(): void {
  }

  submit(): void {

  }
}
