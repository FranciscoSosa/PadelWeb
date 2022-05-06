import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, of, switchMap } from 'rxjs';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$!: Observable<User | undefined>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore)
  {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if(user){
          return this.afs.doc<User>(`User/${user.uid}`).valueChanges();
        } else {
          return of(undefined);
        }
      })
    );
  }

  async signUp(email: string, password: string) {
    try {
      const credentials = await this.afAuth.createUserWithEmailAndPassword(email, password);

      if(credentials.user)
        this.updateUser(credentials.user);
    } catch (err) {
      console.log(err)
    }
  }

  async signIn(email: string, password: string) {
    await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  private updateUser({uid, email}: firebase.default.User) {
    const userRef = this.afs.doc<User>(`User/${uid}`)
    const data: User = {
      uid,
      email: email!,
      playedGames: 1,
      wonGames: 1
    }

    userRef.set(data, {merge: true})
  }

  async signOut() {
    await this.afAuth.signOut();
  }
}
