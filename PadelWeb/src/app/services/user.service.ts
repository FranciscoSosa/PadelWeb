import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dbPath='User';

  constructor(private db: AngularFirestore) { }

  updateUser(id: string, data: any){
    return this.db.collection<User>(this.dbPath).doc(id).update(data);
  }

  deleteUser(id: string){
    return this.db.collection<User>(this.dbPath).doc(id).delete();
  }
}
