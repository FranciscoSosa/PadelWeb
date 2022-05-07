import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Tournament } from '../types/tournament';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  private dbPath='Tournament';

  constructor(private db: AngularFirestore) { }

  getAllTournaments(){
    return this.db.collection<Tournament>(this.dbPath).valueChanges({idField: 'id'});;
  }

  createTournament(tournament: Tournament){
    return this.db.collection<Tournament>(this.dbPath).add({...tournament});
  }

  updateTournament(id: string, data: any){
    return this.db.collection<Tournament>(this.dbPath).doc(id).update(data);
  }

  deleteTournament(id: string){
    return this.db.collection<Tournament>(this.dbPath).doc(id).delete();
  }
}
