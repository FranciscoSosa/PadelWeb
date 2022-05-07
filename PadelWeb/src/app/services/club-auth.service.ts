import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, of, switchMap } from 'rxjs';
import { Club } from '../types/club';

@Injectable({
  providedIn: 'root'
})
export class ClubAuthService {

  user$!: Observable<Club | undefined>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore)
  {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(club => {
        if(club){
          return this.afs.doc<Club>(`Club/${club.uid}`).valueChanges();
        } else {
          return of(undefined);
        }
      })
    );
  }

  async signUp(name: string, email: string, password: string, phone: string) {
    try {
      const credentials = await this.afAuth.createUserWithEmailAndPassword(email, password);

      if(credentials.user)
        this.updateUser(credentials.user, name, phone);
    } catch (err) {
      console.log(err)
    }
  }

  async signIn(email: string, password: string) {
    await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  private updateUser({uid, email}: firebase.default.User, name: string, phone: string) {
    const userRef = this.afs.doc<Club>(`Club/${uid}`)
    const data: Club = {
      uid,
      name,
      phone,
      email: email!,
      img: "assets/images/club-image.svg",
      pending: [],
      active: []
    }

    userRef.set(data, {merge: true})
  }

  async signOut() {
    await this.afAuth.signOut();
  }
}
