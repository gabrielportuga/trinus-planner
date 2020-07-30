import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { TravelRoadmapModel } from 'src/models/roadmap.model';
import { TravelModel } from 'src/models/travel.model';
import { DailyModel } from './../../models/daily.model';

@Injectable({
  providedIn: 'root',
})
export class GuideService {
  private snapshotChangesSubscription: any;

  constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth) {}

  getDailiesGuide(roadmap: TravelRoadmapModel) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe((currentUser) => {
        if (currentUser) {
          this.snapshotChangesSubscription = this.afs
            .collection('traveler')
            .doc(currentUser.uid)
            .collection('travel')
            .doc(roadmap.travel.id)
            .collection('travel-roadmap')
            .doc(roadmap.id)
            .collection('daily-guide')
            .snapshotChanges();
          resolve(this.snapshotChangesSubscription);
        }
      });
    });
  }

  getDailyGuide(daily: DailyModel) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe((currentUser) => {
        if (currentUser) {
          this.snapshotChangesSubscription = this.afs
            .collection('traveler')
            .doc(currentUser.uid)
            .collection('travel')
            .doc(daily.travelRoadmap.travel.id)
            .collection('travel-roadmap')
            .doc(daily.travelRoadmap.id)
            .collection('daily-guide')
            .doc(daily.id)
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

  updateTravel(daily: DailyModel) {
    const travelId = daily.travelRoadmap.travel.id;
    delete daily.travelRoadmap;
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs
        .collection('traveler')
        .doc(currentUser.uid)
        .collection('travel')
        .doc(travelId)
        .collection('travel-roadmap')
        .doc(daily.id)
        .set(daily)
        .then(
          (res) => resolve(res),
          (err) => reject(err)
        );
    });
  }

  deleteTravel(daily: DailyModel) {
    const travelId = daily.travelRoadmap.travel.id;
    delete daily.travelRoadmap;
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs
        .collection('traveler')
        .doc(currentUser.uid)
        .collection('travel')
        .doc(travelId)
        .collection('travel-roadmap')
        .doc(daily.id)
        .delete()
        .then(
          (res) => resolve(res),
          (err) => reject(err)
        );
    });
  }

  createTravel(daily: DailyModel) {
    const travelId = daily.travelRoadmap.travel.id;
    const roadmapId = daily.travelRoadmap.id;
    delete daily.travelRoadmap;
    return new Promise<any>((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      this.afs
        .collection('traveler')
        .doc(currentUser.uid)
        .collection('travel')
        .doc(travelId)
        .collection('travel-roadmap')
        .doc(roadmapId)
        .collection('daily-guide')
        .add(daily)
        .then(
          (res) => {
            resolve(res);
          },
          (err) => reject(err)
        );
    });
  }
}
