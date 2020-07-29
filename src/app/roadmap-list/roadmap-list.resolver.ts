import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TravelRoadmapService } from '../services/travel-roadmap.service';
import { SharedTabsTravel } from '../services/shared-tabs-travel.service';

@Injectable()
export class RoadmapListResolver implements Resolve<any> {

  constructor(private travelRoadmapService: TravelRoadmapService, private sharedTabsTravel: SharedTabsTravel) {}

  resolve() {
    return this.travelRoadmapService.getRoadmaps(this.sharedTabsTravel.tabTravel);
  }
}
