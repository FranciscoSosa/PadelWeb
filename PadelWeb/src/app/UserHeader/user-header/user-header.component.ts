import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
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
