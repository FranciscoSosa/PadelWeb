import { Component, OnInit } from '@angular/core';
import listadeClub from 'src/assets/json/club-afilate.json';

@Component({
  selector: 'app-club-affilates',
  templateUrl: './club-affilates.component.html',
  styleUrls: ['./club-affilates.component.css']
})
export class ClubAffilatesComponent{
  ClubAffilate : any = listadeClub;
}
