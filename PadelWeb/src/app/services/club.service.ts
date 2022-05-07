import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Club } from '../types/club';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  private dbPath='Club';

  constructor(private db: AngularFirestore) { }

  getClubByEmail(email: string){
    return this.db.collection<Club>(this.dbPath, ref => ref.where('email', '==', email)).valueChanges({idField: 'id'});;
  }

  createClub(club: Club){
    return this.db.collection<Club>(this.dbPath).add({...club});
  }

  updateClub(id: string, data: any){
    return this.db.collection<Club>(this.dbPath).doc(id).update(data);
  }

  deleteClub(id: string){
    return this.db.collection<Club>(this.dbPath).doc(id).delete();
  }

  getClubs(){
    return this.db.collection<Club>(this.dbPath).valueChanges()
  }
}
