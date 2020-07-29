import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoadingController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { TravelModel } from 'src/models/travel.model';
import { SharedTabsTravel } from '../services/shared-tabs-travel.service';

@Component({
  selector: 'app-travel-around',
  templateUrl: './travel-around.page.html',
  styleUrls: ['./travel-around.page.scss'],
})

export class TravelAroundPage implements OnInit {
  items: Array<any>;

  constructor(
    public loadingCtrl: LoadingController,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private menuCtrl: MenuController,
    private sharedTabsTravel: SharedTabsTravel
  ) {}

  ngOnInit() {
    if (this.route && this.route.data) {
      this.getData();
      this.menuCtrl.enable(true);
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
        console.log(this.items);
      });
    });
  }

  openTravelMaintain(id: string, travel: TravelModel) {
    travel.id = id;
    const navigation: NavigationExtras = {
      state: {
        travel
      }
    };
    this.router.navigate(['travel-detail'], navigation);
  }

  goToNewTravel() {
    this.sharedTabsTravel.tabTravel = undefined;
    this.router.navigate(['travel-new']);
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
