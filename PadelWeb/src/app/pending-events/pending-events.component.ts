import { Component, OnInit } from '@angular/core';
import { PendingEventsService } from '../services/pending-events.service';

@Component({
  selector: 'app-pending-events',
  templateUrl: './pending-events.component.html',
  styleUrls: ['./pending-events.component.css']
})
export class PendingEventsComponent implements OnInit {
  private _pendingEvents: any;

  constructor(private pendingService: PendingEventsService) {}

  get pendingEvents(){
    return this._pendingEvents;
  }

  ngOnInit(): void {
    this.pendingService.getPendingEvents()
      .subscribe(club => {
        this._pendingEvents = club.pending;
      });
  }

}
