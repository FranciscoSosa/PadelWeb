import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-club-header',
  templateUrl: './club-header.component.html',
  styleUrls: ['./club-header.component.css']
})
export class ClubHeaderComponent implements OnInit {
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