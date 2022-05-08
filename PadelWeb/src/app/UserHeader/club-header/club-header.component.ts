import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-club-header',
  templateUrl: './club-header.component.html',
  styleUrls: ['./club-header.component.css']
})
export class ClubHeaderComponent implements OnInit {
  show: boolean;

  constructor(private db: AuthService) {
    this.show=false
  }

  ngOnInit(): void {
  }

  showNav(){
    if(this.show === false){
      this.show = true;
    }else if(this.show === true){
      this.show = false;
    }
  }

  logOut(){
    this.db.signOut();
  }

}