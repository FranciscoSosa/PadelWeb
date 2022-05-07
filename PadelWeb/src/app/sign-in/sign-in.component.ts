import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  model = {
    email: "",
    password: ""
  }

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.auth.signIn(this.model.email, this.model.password)
      .then(() => this.router.navigate(["/user/statistics"]));
  }
}
