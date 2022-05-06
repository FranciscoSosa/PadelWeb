import { Component, OnInit} from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-types-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.css'],
  host: {
    class: environment.userPageLayout
  }
})
export class UserEditProfileComponent implements OnInit {

  model = {
    name: "",
    surname: "",
    email: "",
    phone: ""
  }

  constructor(){

  }

  ngOnInit(): void {
  }

  submit(): void {

  }
}
