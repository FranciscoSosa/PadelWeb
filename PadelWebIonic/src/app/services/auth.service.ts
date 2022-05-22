import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of} from 'rxjs';
import { switchMap } from 'rxjs/operators';
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

  async signUp(signUpInfo: {email: string, password: string, name: string, phone: string}) {
    const {email, password, name, phone} = signUpInfo;
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
    const userRef = this.afs.doc<User>(`User/${uid}`)
    const data: User = {
      uid,
      name,
      phone,
      email: email!,
      img: "assets/images/User-Profile-Picture.svg",
      playedGames: 0,
      wonGames: 0,
      history: [],
      pending: []
    }

    userRef.set(data, {merge: true})
  }

  async signOut() {
    await this.afAuth.signOut();
  }
}
