import { Component, OnInit} from '@angular/core';
import { environment } from 'src/environments/environment';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {AuthService} from "../services/auth.service";
import firebase from "firebase/compat";
import {User} from "../types/user";
import {finalize} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {percentage} from "@angular/fire/storage";

@Component({
  selector: 'app-types-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.css'],
  host: {
    class: environment.userPageLayout
  }
})
export class UserEditProfileComponent {

  user!: User;

  model = {
    name: "",
    surname: "",
    email: "",
    phone: ""
  }

  constructor(private auth: AuthService,
              private storage: AngularFireStorage,
              private afs: AngularFirestore) {
    this.auth.user$.subscribe(user => {
      if(user) {
        this.user = user;
      }
    })
  }

  submit(): void {

  }

  uploadFile(event: Event) {
    if(!this.user) return;

    const target = event.target as HTMLInputElement;
    if(target.files && target.files.length > 0) {
      const imagePath = `/user-images/${this.user.uid}`;
      console.log(imagePath)
      const imageRef = this.storage.ref(imagePath);
      const uploadTask = this.storage.upload(imagePath, target.files[0]);

      uploadTask.percentageChanges().subscribe(percentage => {
        console.log(percentage);
      });

      uploadTask.snapshotChanges().pipe(
        finalize(() => {
          imageRef.getDownloadURL().subscribe(downloadURL => {
            const userRef = this.afs.doc(`User/${this.user.uid}`);
            userRef.set({img: downloadURL}, {merge: true})
          });
        })
      ).subscribe();
    }
  }
}
