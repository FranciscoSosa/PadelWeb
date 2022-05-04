import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dbPath='User';

  constructor(private db: AngularFirestore) { }


  getAllUsers(){
    return this.db.collection<User>(this.dbPath).valueChanges();
  }

  getUserByEmail(email: string){
    return this.db.collection<User>(this.dbPath, ref => ref.where('email', '==', email)).valueChanges();
  }
}
