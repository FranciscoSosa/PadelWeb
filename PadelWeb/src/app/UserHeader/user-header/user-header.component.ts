import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  show: boolean;

  constructor() {
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

}
