import { Injectable } from '@angular/core';
import { TravelModel } from 'src/models/travel.model';
import { TravelRoadmapModel } from 'src/models/roadmap.model';

@Injectable({ providedIn: 'root' })
export class SharedTabsTravel {
    public tabTravel: TravelModel;
    public tabRoadmap: TravelRoadmapModel;
}