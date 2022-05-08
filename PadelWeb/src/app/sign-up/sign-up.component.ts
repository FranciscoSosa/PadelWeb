import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  model = {
    email: "",
    password: "",
    name: "",
    phone: ""
  }

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  async signUp() {
    await this.auth.signUp(this.model);
    await this.auth.signIn(this.model.email, this.model.password);
    this.router.navigate(["/user/statistics"])
  }
}
