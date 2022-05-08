import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Match } from '../types/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private dbPath='Match';

  constructor(private db: AngularFirestore) { }

  getAllMatches(){
    return this.db.collection<Match>(this.dbPath).valueChanges({idField: 'id'});;
  }

  createMatch(match: Match){
    return this.db.collection<Match>(this.dbPath).add({...match});
  }

  updateMatch(id: string, data: any){
    return this.db.collection<Match>(this.dbPath).doc(id).update(data);
  }

  deleteMatch(id: string){
    return this.db.collection<Match>(this.dbPath).doc(id).delete();
  }
}
