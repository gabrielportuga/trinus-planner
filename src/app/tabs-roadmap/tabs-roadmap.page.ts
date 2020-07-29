import { Component } from '@angular/core';
import { ScreensizeService } from '../services/screensize.service';

@Component({
  selector: 'app-tabsRoadmap',
  templateUrl: 'tabs-roadmap.page.html',
  styleUrls: ['tabs-roadmap.page.scss'],
})
export class TabsRoadmapPage {
  isDesktop: boolean;

  constructor(private screensizeService: ScreensizeService) {
    this.screensizeService.isDesktopView().subscribe((isDesktop) => {
      if (this.isDesktop && !isDesktop) {
        // Reload because our routing is out of place
        window.location.reload();
      }

      this.isDesktop = isDesktop;
    });
  }
}
