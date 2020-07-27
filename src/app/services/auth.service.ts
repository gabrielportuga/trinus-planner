import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { TravelService } from './travel.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private travelService: TravelService,
    public afAuth: AngularFireAuth
  ) {}

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(value.email, value.password)
        .then(
          () => {
            firebase.auth().currentUser.updateProfile({displayName: value.displayName})
            .then((res) => resolve(res),
            (errUpdate) => reject(errUpdate));
          },
          (err) => reject(err)
        );
    });
  }

  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(value.email, value.password)
        .then(
          (res) => resolve(res),
          (err) => reject(err)
        );
    });
  }

  doLogout() {
    return new Promise((resolve, reject) => {
      this.afAuth.auth
        .signOut()
        .then(() => {
          this.travelService.unsubscribeOnLogOut();
          resolve();
        })
        .catch((error) => {
          console.log(error);
          reject();
        });
    });
  }
}
