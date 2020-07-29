import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { TravelRoadmapModel } from 'src/models/roadmap-model';
import { TravelModel } from 'src/models/travel.model';

@Injectable({
  providedIn: 'root',
})
export class TravelRoadmapService {
  private snapshotChangesSubscription: any;

  constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth) {}

  getRoadmaps(travel: TravelModel) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe((currentUser) => {
        if (currentUser) {
          this.snapshotChangesSubscription = this.afs
            .collection('traveler')
            .doc(currentUser.uid)
            .collection('travel')
            .doc(travel.id)
            .collection('travel-roadmap')
            .snapshotChanges();
          resolve(this.snapshotChangesSubscription);
        }
      });
    });
  }

  getTravel(travelRoadmap: TravelRoadmapModel) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe((currentUser) => {
        if (currentUser) {
          this.snapshotChangesSubscription = this.afs
            .collection('traveler')
            .doc(currentUser.uid)
            .collection('travel')
            .doc(travelRoadmap.travel.id)
            .collection('travel-roadmap')
            .doc(travelRoadmap.id)
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

  updateTravel(travelRoadmap: TravelRoadmapModel) {
    const travelId = travelRoadmap.travel.id;
    delete travelRoadmap.travel;
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs
        .collection('traveler')
        .doc(currentUser.uid)
        .collection('travel')
        .doc(travelId)
        .collection('travel-roadmap')
        .doc(travelRoadmap.id)
        .set(travelRoadmap)
        .then(
          (res) => resolve(res),
          (err) => reject(err)
        );
    });
  }

  deleteTravel(travelRoadmap: TravelRoadmapModel) {
    const travelId = travelRoadmap.travel.id;
    delete travelRoadmap.travel;
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs
        .collection('traveler')
        .doc(currentUser.uid)
        .collection('travel')
        .doc(travelId)
        .collection('travel-roadmap')
        .doc(travelRoadmap.id)
        .delete()
        .then(
          (res) => resolve(res),
          (err) => reject(err)
        );
    });
  }

  createTravel(travelRoadmap: TravelRoadmapModel) {
    const travelId = travelRoadmap.travel.id;
    delete travelRoadmap.travel;
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs
        .collection('traveler')
        .doc(currentUser.uid)
        .collection('travel')
        .doc(travelId)
        .collection('travel-roadmap')
        .add(travelRoadmap)
        .then(
          (res) => resolve(res),
          (err) => reject(err)
        );
    });
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
