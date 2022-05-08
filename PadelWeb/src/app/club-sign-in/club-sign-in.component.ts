import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClubAuthService } from '../services/club-auth.service';

@Component({
  selector: 'app-club-sign-in',
  templateUrl: './club-sign-in.component.html',
  styleUrls: ['./club-sign-in.component.css']
})
export class ClubSignInComponent implements OnInit {

  model = {
    email: "",
    password: ""
  }

  constructor(public auth: ClubAuthService, private router: Router) { }

  ngOnInit(): void {

  }

  login(): void{
    this.auth.signIn(this.model.email, this.model.password)
    .then(() => this.router.navigate(["/club/pending-events"]));
  }
}
