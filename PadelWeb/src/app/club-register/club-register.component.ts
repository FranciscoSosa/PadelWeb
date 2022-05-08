import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClubAuthService } from '../services/club-auth.service';

@Component({
  selector: 'app-club-register',
  templateUrl: './club-register.component.html',
  styleUrls: ['./club-register.component.css']
})
export class ClubRegisterComponent implements OnInit {

  model = {
    name: "",
    email: "",
    phone: "",
    password: "",
  }

  constructor(private auth: ClubAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signUp(): void {
    this.auth.signUp(this.model.name, this.model.email, this.model.password, this.model.phone)
      .then(() => this.router.navigate(["/club-sign-in"]));
  }
}
