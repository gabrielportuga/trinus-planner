import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { TravelRoadmapModel } from 'src/models/travel-roadmap-model';
import { SharedTabsTravel } from '../services/shared-tabs-travel.service';

@Component({
  selector: 'app-travel-roadmap-list',
  templateUrl: './travel-roadmap-list.page.html',
  styleUrls: ['./travel-roadmap-list.page.scss'],
})

export class TravelRoadmapListPage implements OnInit {
  items: Array<any>;

  constructor(
    public loadingCtrl: LoadingController,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private sharedTabsTravel: SharedTabsTravel
  ) {}

  ngOnInit() {
    if (this.route && this.route.data) {
      this.getData();
    }
  }

  async getData() {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...',
    });
    this.presentLoading(loading);

    this.route.data.subscribe((routeData) => {
      routeData.data.subscribe((data) => {
        loading.dismiss();
        this.items = data;
      });
    });
  }

  openTravelMaintain(id: string, travelRoadmap: TravelRoadmapModel) {
    travelRoadmap.travel = this.sharedTabsTravel.tabTravel;
    travelRoadmap.id = id;
    const navigation: NavigationExtras = {
      state: {
        travelRoadmap
      }
    };
    this.router.navigate(['travel-roadmap-new'], navigation);
  }

  goToNewTravelRoadmap() {
    this.router.navigate(['travel-roadmap-new']);
  }

  async presentLoading(loading) {
    return await loading.present();
  }

  logout() {
    this.authService.doLogout().then(
      (res) => {
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}