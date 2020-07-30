import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { SharedTabsTravel } from '../services/shared-tabs-travel.service';
import { GuideService } from '../services/guide.service';

@Injectable()
export class GuideListResolver implements Resolve<any> {

  constructor(private guideService: GuideService, private sharedTabsTravel: SharedTabsTravel) {}

  resolve() {
    return this.guideService.getDailiesGuide(this.sharedTabsTravel.tabRoadmap);
  }
}
