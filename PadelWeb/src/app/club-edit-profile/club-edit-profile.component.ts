import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import {environment} from "../../environments/environment";
import { ClubAuthService } from '../services/club-auth.service';
import { ClubService } from '../services/club.service';
import { Club } from '../types/club';

@Component({
  selector: 'app-club-edit-profile',
  templateUrl: './club-edit-profile.component.html',
  styleUrls: ['./club-edit-profile.component.css'],
  host: {
    class: environment.userPageLayout
  }
})
export class ClubEditProfileComponent implements OnInit {

  model = {
    name: "",
    email: "",
    phone: ""
  }
  club!: Club;

  constructor(private auth: ClubAuthService,
              private storage: AngularFireStorage,
              private afs: AngularFirestore) {
    this.auth.user$.subscribe(user => {
      if(user) {
        this.club = user;
      }
    }) 
  
  }

  ngOnInit(): void {
  }

  submit(): void {

  }

  uploadFile(event: Event) {
    if(!this.club) return;

    const target = event.target as HTMLInputElement;
    if(target.files && target.files.length > 0) {
      const imagePath = `/club-images/${this.club.uid}`;
      console.log(imagePath)
      const imageRef = this.storage.ref(imagePath);
      const uploadTask = this.storage.upload(imagePath, target.files[0]);

      uploadTask.percentageChanges().subscribe(percentage => {
        console.log(percentage);
      });

      uploadTask.snapshotChanges().pipe(
        finalize(() => {
          imageRef.getDownloadURL().subscribe(downloadURL => {
            const userRef = this.afs.doc(`Club/${this.club.uid}`);
            userRef.set({img: downloadURL}, {merge: true})
          });
        })
      ).subscribe();
    }
  }
}
