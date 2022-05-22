import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  model = {
    email: "",
    password: ""
  }

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.auth.signIn(this.model.email, this.model.password)
      .then(() => this.router.navigate(["/main-user/statistics"]));
  }
}
