import { Injectable } from '@angular/core';
import { TravelModel } from 'src/models/travel.model';

@Injectable({ providedIn: 'root' })
export class SharedTabsTravel {
    public tabTravel: TravelModel;
}