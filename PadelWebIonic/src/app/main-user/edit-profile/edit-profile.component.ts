import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {AuthService} from "src/app/services/auth.service";
import {User} from "src/app/types/user";
import {finalize} from "rxjs/operators";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-types-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  host: {
    class: environment.userPageLayout
  }
})
export class EditProfileComponent {

  user!: User;

  model = {
    name: "",
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
    if(!this.user) return;

    const data: any = {};

    if(this.model.name.length > 0)
      data.name = this.model.name;

    if(this.model.phone.length > 0)
      data.phone = this.model.phone;

    const userRef = this.afs.doc(`User/${this.user.uid}`);
    userRef.set(data, {merge: true});
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
