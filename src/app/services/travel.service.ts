import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { TravelModel } from 'src/models/travel.model';
import { TravelerModel } from 'src/models/traveler.moldel';
import { TravelListResolver } from '../travel-list/travel-list.resolver';

@Injectable({
  providedIn: 'root',
})
export class TravelService {
  private snapshotChangesSubscription: any;

  constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth) {}

  getAllTravels() {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe((currentUser) => {
        if (currentUser) {
          this.snapshotChangesSubscription = this.afs.collectionGroup('travel').snapshotChanges();
          // this.snapshotChangesSubscription = this.afs
          //   .collection('travel')
          //   .snapshotChanges();
          resolve(this.snapshotChangesSubscription);
        }
      });
    });
  }

  getTravels() {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe((currentUser) => {

        if (currentUser) {
          this.snapshotChangesSubscription = this.afs
            .collection('traveler')
            .doc(currentUser.uid)
            .collection('travel')
            .snapshotChanges();

          resolve(this.snapshotChangesSubscription);
        }

        // if (currentUser) {
        //   this.snapshotChangesSubscription = this.afs
        //     .collection('travel', (ref) =>
        //       ref.where('travelerId', '==', currentUser.uid)
        //     )
        //     .snapshotChanges();

        //   resolve(this.snapshotChangesSubscription);
        // }
      });
    });
  }

  getTravel(travelId) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe((currentUser) => {
        if (currentUser) {
          this.snapshotChangesSubscription = this.afs
            .collection('traveler')
            .doc(currentUser.uid)
            .collection('travel')
            .doc(travelId)
            .valueChanges()
            .subscribe(
              (snapshots) => {
                resolve(snapshots);
              },
              (err) => {
                reject(err);
              }
            );
        }
      });
    });
  }

  unsubscribeOnLogOut() {
    // remember to unsubscribe from the snapshotChanges
    this.snapshotChangesSubscription.unsubscribe();
  }

  updateTravel(travelKey, value) {
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs
        .collection('traveler')
        .doc(currentUser.uid)
        .collection('travel')
        .doc(travelKey)
        .set(value)
        .then(
          (res) => resolve(res),
          (err) => reject(err)
        );
    });
  }

  deleteTravel(travelKey) {
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs
        .collection('traveler')
        .doc(currentUser.uid)
        .collection('travel')
        .doc(travelKey)
        .delete()
        .then(
          (res) => resolve(res),
          (err) => reject(err)
        );
    });
  }

  createTravel(travel: TravelModel) {
    const currentUser = firebase.auth().currentUser;
    travel.travelerId = currentUser.uid;
    // const traveler = {} as TravelerModel;
    // traveler.id = currentUser.uid;
    // traveler.email = currentUser.email;
    // traveler.name = currentUser.displayName;
    // travel.traveler = traveler;

    return new Promise<any>((resolve, reject) => {
      this.afs
        .collection('traveler')
        .doc(currentUser.uid)
        .collection('travel')
        .add(travel)
        .then(
          (res) => resolve(res),
          (err) => reject(err)
        );
    });

    // return new Promise<any>((resolve, reject) => {
    //   this.afs
    //     .collection('travel')
    //     .add(travel)
    //     .then(
    //       (res) => resolve(res),
    //       (err) => reject(err)
    //     );
    // });
  }

  encodeImageUri(imageUri, callback) {
    const c = document.createElement('canvas');
    const ctx = c.getContext('2d');
    const img = new Image();
    img.onload = function () {
      const aux: any = this;
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img, 0, 0);
      const dataURL = c.toDataURL('image/jpeg');
      callback(dataURL);
    };
    img.src = imageUri;
  }

  uploadImage(imageURI, randomId) {
    return new Promise<any>((resolve, reject) => {
      const storageRef = firebase.storage().ref();
      const imageRef = storageRef.child('image').child(randomId);
      this.encodeImageUri(imageURI, function (image64) {
        imageRef.putString(image64, 'data_url').then(
          (snapshot) => {
            snapshot.ref.getDownloadURL().then((res) => resolve(res));
          },
          (err) => {
            reject(err);
          }
        );
      });
    });
  }
}
