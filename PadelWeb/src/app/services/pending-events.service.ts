import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PendingEventsService {

  constructor(private http:HttpClient) { }
  
  getPendingEvents(){
    return this.http.get<any>('../../assets/json/club.json')
  }
}
