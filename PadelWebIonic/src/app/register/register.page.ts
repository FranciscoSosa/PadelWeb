import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  model = {
    email: "",
    password: "",
    name: "",
    phone: ""
  }

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async signUp() {
    await this.auth.signUp(this.model);
    await this.auth.signIn(this.model.email, this.model.password);
    this.router.navigate(["/main-user/statistics"])
  }
}
