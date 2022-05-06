import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-types-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['../../styles.css'],
  host: {
    class: 'content-section ml-auto mr-auto col-lg-9 col-10'
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
