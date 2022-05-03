import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataUserService {

  private dbPath='User';

  constructor(private db: AngularFirestore) { }


  async getAllProducts(){
    return new Promise<any>((data) => {
      this.db.collection(this.dbPath)
      .valueChanges({ idField: 'id' })
      .subscribe(users => data(users));
    })
  }
}
