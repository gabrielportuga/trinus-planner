import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreensizeService } from './services/screensize.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Location } from '@angular/common';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isDesktop: boolean;

  public appPages = [
    {
      title: 'Por aí',
      url: '/travel-around',
      icon: 'trail-sign-outline',
    },
    {
      title: 'Minhas Viagens',
      url: '/travel-list',
      icon: 'airplane-outline',
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private screensizeService: ScreensizeService,
    private router: Router,
    private authService: AuthService,
    public afAuth: AngularFireAuth
  ) {
    this.initializeApp();

    this.screensizeService.isDesktopView().subscribe((isDesktop) => {
      // if (this.isDesktop && !isDesktop) {
      //   // Reload because our routing is out of place
      //   window.location.reload();
      // }
      this.isDesktop = isDesktop;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.afAuth.user.subscribe(
        (user) => {
          if (user) {
            this.router.navigate(['/travel-around']);
          } else {
            this.router.navigate(['/login']);
          }
        },
        (err) => {
          this.router.navigate(['/login']);
        }
      );
      this.splashScreen.hide();
      this.screensizeService.onResize(this.platform.width());
      this.statusBar.styleDefault();
    });
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
  // @HostListener('window:resize', ['$event'])
  // private onResize(event) {
  //   this.screensizeService.onResize(event.target.innerWidth);
  // }
}
